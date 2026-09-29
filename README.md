# RITM Open Log

A ServiceNow scoped app (scope `x_ritm_log`) that records who opened each requested
item (RITM) and when. It's built with the [ServiceNow SDK](https://www.servicenow.com/docs/csh?topicname=servicenow-sdk-landing&version=latest)
(Fluent), so the whole app is source code in this repo.

## What it does

When a RITM is created, the **Log RITM opened** business rule (after insert on `sc_req_item`)
writes one row to the **RITM Open Log** table (`x_ritm_log_entry`):

| Field | Source on the RITM |
|---|---|
| Requested item | the RITM itself (reference) |
| RITM number | `number` (kept as text, so the entry still makes sense if the RITM is deleted) |
| Opened by | `opened_by` |
| Opened | `opened_at` |

RITMs already carry `opened_by` / `opened_at`, but those fields can be edited later. The log
captures the values at creation time and is read-only: users with the `x_ritm_log.viewer`
role can read it, and only admins can change it. Updates to a RITM don't add entries, and RITMs
that existed before the app was installed aren't backfilled.

| Path | What it is |
|---|---|
| `src/fluent/tables/ritm-log-entry.now.ts` | Log table and its list layout |
| `src/fluent/business-rules/log-ritm-opened.now.ts` | After-insert rule on `sc_req_item`, plus read privilege on it |
| `src/server/business-rules/log-ritm-opened.ts` | The rule's script |
| `src/fluent/security/viewer.now.ts` | `x_ritm_log.viewer` role and read ACL |
| `src/fluent/navigation/menu.now.ts` | **RITM Open Log > Log Entries** in the navigator |
| `src/fluent/tests/log-ritm-opened.now.ts` | ATF test for the rule |
| `src/fluent/generated/keys.ts` | Stable sys_ids for every record. Commit it; don't edit it by hand |

## Setup

You need Node.js 20.18 or later, and admin access to a **non-production** ServiceNow instance:
your company's dev instance, or a free Personal Developer Instance from
[developer.servicenow.com](https://developer.servicenow.com).

### 1. Install dependencies

```bash
npm install
```

### 2. Connect your instance

```bash
npx now-sdk auth --add https://<your-instance>.service-now.com --type basic --alias dev
npx now-sdk auth --list
```

If your instance signs in through SSO, use `--type oauth` instead (it opens a browser to sign
in). Credentials are stored in your OS keychain, not in this repo.

### 3. Set the vendor prefix (before the first deploy)

Scoped app names normally start with your instance's vendor prefix: `x_<prefix>_<app>`, 18
characters max. Look up the prefix:

```bash
npx now-sdk query sys_properties --query "name=glide.appcreator.company.code" --fields value
```

If it returns a prefix (for example `acme`), rename the scope everywhere, then rebuild:

```bash
grep -rl x_ritm_log now.config.json src | xargs perl -pi -e 's/\bx_ritm_log/x_acme_ritm_log/g'
```

Do this before the first deploy. Renaming the scope after the app is installed means
uninstalling it and losing the logged data. If the property is empty, `x_ritm_log` works as is.

### 4. Build and deploy

```bash
npm run build     # compile and validate the Fluent source
npm run deploy    # install or update the app on the instance you authenticated
```

### 5. Use it

1. Give the `x_ritm_log.viewer` role to the people or groups who need the log. Admins already
   have access.
2. Order any catalog item, or create a RITM.
3. Open **All > RITM Open Log > Log Entries** to see the new entry.

### 6. Run the test (optional)

In the instance, open **Automated Test Framework > Tests**, find
*RITM Open Log: logs who opened a RITM and when, on insert only*, and click **Run Test**. The
test impersonates a temporary user, creates a RITM, checks the log entry, and rolls back its
data afterwards. ATF has to be enabled on the instance (system property
`sn_atf.runner.enabled`). Don't run ATF on production.

## Making changes

Edit the files under `src/`, then run `npm run build` and `npm run deploy` again. If someone
changes the app directly on the instance (for example in Studio), run `npm run transform` to
pull those changes back into the source before editing. `npx now-sdk explain <topic>` shows
the SDK's bundled docs (for example `npx now-sdk explain business-rule-guide`).

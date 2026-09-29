import { Test } from '@servicenow/sdk/core'

Test(
    {
        $id: Now.ID['test-log-ritm-opened'],
        name: 'RITM Open Log: logs who opened a RITM and when, on insert only',
        description:
            'Impersonates a new test user, inserts a sc_req_item, and asserts one x_ritm_log_entry exists for it with opened_by = the test user and opened_at set (insert side of the "Log RITM opened" rule). Then updates the RITM and asserts there is still exactly one entry (update side: the rule must not fire).',
        failOnServerError: true,
    },
    (atf) => {
        const opener = atf.server.createUser({
            $id: Now.ID['test-log-ritm-opened-user'],
            firstName: 'RITM Log',
            lastName: 'ATF Opener',
            fieldValues: {},
            groups: [],
            roles: [],
            impersonate: true,
        })

        const ritm = atf.server.recordInsert({
            $id: Now.ID['test-log-ritm-opened-insert'],
            table: 'sc_req_item',
            fieldValues: { short_description: 'RITM Open Log ATF' },
            enforceSecurity: false,
        })

        atf.server.recordQuery({
            $id: Now.ID['test-log-ritm-opened-entry-exists'],
            table: 'x_ritm_log_entry',
            fieldValues: `requested_item=${ritm.record_id}^opened_by=${opener.user}^opened_atISNOTEMPTY`,
            assert: 'records_match_query',
        })

        atf.server.recordUpdate({
            $id: Now.ID['test-log-ritm-opened-update'],
            table: 'sc_req_item',
            recordId: ritm.record_id,
            fieldValues: { short_description: 'RITM Open Log ATF (updated)' },
            enforceSecurity: false,
        })

        atf.server.runServerSideScript({
            $id: Now.ID['test-log-ritm-opened-single-entry'],
            script: `
(function (outputs, steps, params, stepResult, assertEqual) {
    var entries = new GlideAggregate('x_ritm_log_entry');
    entries.addQuery('requested_item', '${ritm.record_id}');
    entries.addAggregate('COUNT');
    entries.query();
    var count = entries.next() ? parseInt(entries.getAggregate('COUNT'), 10) : 0;
    assertEqual({ name: 'log entries for the RITM after an update', shouldbe: 1, value: count });
})(outputs, steps, params, stepResult, assertEqual);
`,
        })
    }
)

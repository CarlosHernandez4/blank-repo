import { Acl, Role } from '@servicenow/sdk/core'

export const viewer = Role({
    name: 'x_ritm_log.viewer',
    description: 'Can read the RITM Open Log.',
})

// Read only. With no create/write/delete ACLs on the table, those fall back to the
// platform's admin-only defaults, so the log can't be edited from the UI or REST.
Acl({
    $id: Now.ID['ritm-log-entry-read'],
    type: 'record',
    table: 'x_ritm_log_entry',
    operation: 'read',
    roles: [viewer],
    adminOverrides: true,
    description: 'Allow RITM Open Log viewers to read log entries.',
})

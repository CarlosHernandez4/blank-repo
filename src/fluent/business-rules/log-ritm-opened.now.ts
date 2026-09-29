import { BusinessRule, CrossScopePrivilege } from '@servicenow/sdk/core'
import { logRitmOpened } from '../../server/business-rules/log-ritm-opened'

BusinessRule({
    $id: Now.ID['log-ritm-opened'],
    name: 'Log RITM opened',
    description: 'Records who opened each requested item and when in the RITM Open Log.',
    table: 'sc_req_item',
    when: 'after',
    action: ['insert'],
    order: 100,
    active: true,
    script: logRitmOpened,
})

// The rule runs in this app's scope but reads the global sc_req_item record.
CrossScopePrivilege({
    $id: Now.ID['read-sc-req-item'],
    status: 'allowed',
    operation: 'read',
    targetName: 'sc_req_item',
    targetScope: 'global',
    targetType: 'sys_db_object',
})

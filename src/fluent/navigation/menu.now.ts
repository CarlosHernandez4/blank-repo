import { ApplicationMenu, Record } from '@servicenow/sdk/core'
import { viewer } from '../security/viewer.now'

const menu = ApplicationMenu({
    $id: Now.ID['ritm-log-menu'],
    title: 'RITM Open Log',
    hint: 'Who opened each requested item, and when',
    roles: [viewer],
    active: true,
})

Record({
    $id: Now.ID['ritm-log-module-entries'],
    table: 'sys_app_module',
    data: {
        title: 'Log Entries',
        application: menu,
        link_type: 'LIST',
        name: 'x_ritm_log_entry',
        // Must be a literal: passing viewer.name here fails the SDK 4.13 build.
        roles: ['x_ritm_log.viewer'],
        active: true,
        order: 100,
    },
})

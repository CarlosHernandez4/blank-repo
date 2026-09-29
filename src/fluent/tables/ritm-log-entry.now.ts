import { DateTimeColumn, List, ReferenceColumn, StringColumn, Table, default_view } from '@servicenow/sdk/core'

// One row per requested item, written by the "Log RITM opened" business rule.
// Values are captured at insert time, so later edits to the RITM don't change the log.
export const x_ritm_log_entry = Table({
    name: 'x_ritm_log_entry',
    label: 'RITM Open Log',
    display: 'ritm_number',
    schema: {
        requested_item: ReferenceColumn({
            label: 'Requested item',
            referenceTable: 'sc_req_item',
            readOnly: true,
        }),
        // Kept as text so the entry still identifies the RITM if the RITM is deleted.
        ritm_number: StringColumn({ label: 'RITM number', maxLength: 40, readOnly: true }),
        opened_by: ReferenceColumn({ label: 'Opened by', referenceTable: 'sys_user', readOnly: true }),
        opened_at: DateTimeColumn({ label: 'Opened', readOnly: true }),
    },
})

List({
    table: 'x_ritm_log_entry',
    view: default_view,
    columns: ['ritm_number', 'requested_item', 'opened_by', 'opened_at'],
})

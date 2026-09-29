import { GlideRecord } from '@servicenow/glide'

export function logRitmOpened(current: GlideRecord<'sc_req_item'>) {
    const entry = new GlideRecord('x_ritm_log_entry')
    entry.initialize()
    entry.setValue('requested_item', current.getUniqueValue())
    entry.setValue('ritm_number', current.getValue('number'))
    entry.setValue('opened_by', current.getValue('opened_by'))
    entry.setValue('opened_at', current.getValue('opened_at'))
    entry.insert()
}

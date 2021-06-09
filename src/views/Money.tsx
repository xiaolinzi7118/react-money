import NavLayout from "components/NavLayout"
import { useState } from "react"
import { Type } from 'views/Money/Type'
import { Account } from "./Money/Account"
import { PickDate } from "./Money/PickDate"
import { Tags } from "./Money/Tags"
import { Note } from './Money/Note'


const defaultRecord = {
    id: '0',
    type: 'out',
    account: '0',
    tagId: '',
    note: '',
    createdAt: ''
}
function Money() {
    const [record, setRecord] = useState(defaultRecord)
    const onChange = (obj: Partial<typeof record>) => {
        setRecord({ ...record, ...obj })
    }
    return (
        <NavLayout>
            <Type value={record.type} onChange={(type) => onChange({ type })} />
            <Account value={record.account} type={record.type} />
            <Tags value={record.type} tagId={record.tagId} onChange={(tagId) => onChange({ tagId })} />
            <PickDate onChange={(createdAt) => onChange({ createdAt })} />
            <Note value={record.note} onChange={(note) => onChange({ note })} />
        </NavLayout>
    )
}
export default Money
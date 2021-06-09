import NavLayout from "components/NavLayout"
import { useState } from "react"
import { Type } from 'views/Money/Type'
import { Account } from "./Money/Account"


const defaultRecord = {
    id: '0',
    type: 'out',
    account: '0',
    tagId: 1,
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
        </NavLayout>
    )
}
export default Money
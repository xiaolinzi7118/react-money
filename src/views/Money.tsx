import NavLayout from "components/NavLayout"
import { useState } from "react"
import { Type } from 'views/Money/Type'


const defaultRecord = {
    id: '0',
    type: 'out',
    account: 0,
    tagId: 1,
    note: '',
    createdAt: ''
}
function Money() {
    const [record, setRecord] = useState(defaultRecord)
    const onChange = (obj: Partial<typeof record>) => {
        setRecord({ ...record, ...obj })
        console.log(record)
    }
    return (
        <NavLayout>
            <Type value={defaultRecord.type} onChange={(type) => onChange({ type })} />
        </NavLayout>
    )
}
export default Money
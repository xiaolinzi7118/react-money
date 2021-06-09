import NavLayout from "components/NavLayout"
import { useState } from "react"
import { Type } from 'views/Money/Type'
import { Account } from "./Money/Account"
import { PickDate } from "./Money/PickDate"
import { Tags } from "./Money/Tags"
import { Note } from './Money/Note'
import { NumberPad } from "./Money/NumberPad"
import styled from "styled-components"
import { useRecordList } from "hooks/useRecordList"

const MyLayout = styled(NavLayout)`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
`
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
    const { addRecord } = useRecordList()
    const onChange = (obj: Partial<typeof record>) => {
        setRecord({ ...record, ...obj })
    }
    const onSubmit = () => {
        setRecord({ ...record, id: Math.random().toString(16).slice(2) })
        if (addRecord(record)) {
            alert('保存成功')
            setRecord(defaultRecord)
        }
    }
    return (
        <MyLayout>
            <Type value={record.type} onChange={(type) => onChange({ type })} />
            <Account value={record.account} type={record.type} />
            <Tags value={record.type} tagId={record.tagId} onChange={(tagId) => onChange({ tagId })} />
            <PickDate onChange={(createdAt) => onChange({ createdAt })} />
            <Note value={record.note} onChange={(note) => onChange({ note })} />
            <NumberPad value={record.account} onChange={(account) => onChange({ account })} onOk={onSubmit} />
        </MyLayout>
    )
}
export default Money
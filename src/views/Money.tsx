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
import { Toast } from "antd-mobile"

const MyLayout = styled(NavLayout)`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
`
const defaultRecord = {
    type: '-',
    account: '0',
    tagId: '',
    note: '',
    createdAt: (new Date()).toISOString()
}
function Money() {
    const [record, setRecord] = useState(defaultRecord)
    const { addRecord } = useRecordList()
    const onChange = (obj: Partial<typeof record>) => {
        setRecord({ ...record, ...obj })
    }
    const onSubmit = () => {
        if (addRecord(record)) {
            Toast.success('保存成功', 1.5);
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
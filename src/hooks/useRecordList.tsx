import { Toast } from "antd-mobile"
import { useEffect, useState } from "react"

type RecordItem = {
    id: number,
    type: string,
    output: number,
    tagId: string,
    note: string,
    createdAt: string
}
type NewRecordItem = {
    type: string,
    account: string,
    tagId: string,
    note: string,
    createdAt: string
}
const useRecordList = () => {
    const [record, setRecord] = useState<RecordItem[]>([])
    useEffect(() => {
        setRecord(JSON.parse(window.localStorage.getItem('recordList') || '[]'));
    }, []);
    useEffect(() => {
        window.localStorage.setItem('recordList', JSON.stringify(record));
    }, [record]);
    let recordId = parseInt(window.localStorage.getItem('idMax') || '0');
    const createRecordId = () => {
        recordId += 1;
        window.localStorage.setItem('idMax', JSON.stringify(recordId))
        return recordId
    }
    const addRecord = (newRecord: NewRecordItem) => {
        if (newRecord.account === '0') {
            Toast.fail('请输入金额', 1.5)
            return false;
        }
        if (newRecord.tagId === '') {
            Toast.fail('请选择标签', 1.5)
            return false;
        }
        const _record = { ...newRecord, output: parseFloat(newRecord.account), id: createRecordId() };
        setRecord([...record, _record]);
        return true;
    };
    return { record, addRecord }
}
export { useRecordList }
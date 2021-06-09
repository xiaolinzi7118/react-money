import { useEffect, useState } from "react"

type RecordItem = {
    id: string,
    type: string,
    output: number,
    tagId: string,
    note: string,
    createdAt: string
}
type NewRecordItem = {
    id: string,
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
    const addRecord = (newRecord: NewRecordItem) => {
        if (newRecord.account === '0') {
            alert('请输入金额');
            return false;
        }
        if (newRecord.tagId === '') {
            alert('请选择标签');
            return false;
        }
        const _record = { ...newRecord, output: parseFloat(newRecord.account) };
        setRecord([...record, _record]);
        return true;
    };
    return { record, addRecord }
}
export { useRecordList }
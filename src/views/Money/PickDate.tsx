import { DatePicker, List } from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';
import { useState } from 'react';

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

// let minDate = new Date(nowTimeStamp - 1e7);
// const maxDate = new Date(nowTimeStamp + 1e7);
// if (minDate.getDate() !== maxDate.getDate()) {
//     minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
// }
type Props = {
    onChange: (createdAt: string) => void
}
const PickDate: React.FC<Props> = (props) => {
    const [state, setState] = useState({
        date: now,
        time: now,
        utcDate: utcNow,
        dpValue: null,
        customChildValue: null,
        visible: false,
    })
    const onChangeDate = (createdAt: Date) => {
        setState({ ...state, date: createdAt })
        props.onChange(createdAt.toISOString())
    }
    return (
        <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
            <DatePicker
                mode="date"
                title="选择年月日"
                minDate={new Date(2020, 0, 1)}
                maxDate={new Date(2021, 11, 31)}
                extra="Optional"
                value={state.date}
                onChange={date => onChangeDate(date)}
            >
                <List.Item arrow="horizontal">选择日期</List.Item>
            </DatePicker>
        </List>
    )
}
export { PickDate }
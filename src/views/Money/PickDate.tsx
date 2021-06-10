import { DatePicker, List } from 'antd-mobile';
import { useState } from 'react';
import 'style/pickDate.css'
import day from 'dayjs'

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

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
    const currentYear = day(new Date()).year()
    return (
        <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
            <DatePicker
                mode="date"
                title="选择年月日"
                minDate={new Date(currentYear, 0, 1)}
                maxDate={new Date(currentYear, 11, 31)}
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
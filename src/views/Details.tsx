import NavLayout from "components/NavLayout"
import { Button } from 'antd-mobile';
import { useRecordList } from "hooks/useRecordList";
import { useTagList } from "hooks/useTagsList";
import Icon from "components/Icons";
import 'style/details.css'
import day from 'dayjs'
import { useState } from "react";
import { NavLink } from "react-router-dom";

type RecordItem = {
    id: number,
    type: string,
    output: number,
    tagId: string,
    note: string,
    createdAt: string
}
function Details() {
    const { record } = useRecordList();
    const { tagList1, tagList2 } = useTagList();
    const tagList = tagList1.concat(tagList2)
    const tagName = (tagId: string) => tagList.filter(t => t.id === tagId)[0]
    const [month, setMonth] = useState(day(new Date()).month() + 1)
    const lessMonth = () => {
        if (month > 1) {
            setMonth(month - 1)
        }
    }
    const moreMonth = () => {
        if (month < 12) {
            setMonth(month + 1)
        }
    }
    //获取对应月份渲染的数据
    const getNewList = () => {
        const allDays = Array.from(new Set(record.map(r => r.createdAt))).sort((a: any, b: any) => {
            const aa = day(a).format('DD');
            const bb = day(b).format('DD');
            return Number(aa) - Number(bb)
        })
        const newList = allDays.map((d) => {
            const data = record.filter((item) => item.createdAt === d);
            return {
                date: d,
                list: data,
            };
        });
        return newList.filter((n) => day(n.date).month() + 1 === month)
    }
    //根据支出收入类型来计算
    const getTotal = (type: string) => {
        const totalList = getNewList()
        const a = totalList.reduce((total, val) => {
            const _total = total.concat(val.list)
            return _total
        }, [] as RecordItem[])
            .filter(i => i.type === type)
            .reduce((total, val) => {
                return total + val.output
            }, 0)
        return a
    }
    const getClass = (type: string) => {
        if (type === '-') {
            return 'out'
        } else {
            return 'in'
        }
    }
    return (
        <NavLayout>
            <div>
                <div className='fixed'>
                    <div className='selectedMonth'>
                        <Button type="ghost" size="small" inline className='btn' onClick={lessMonth}>上个月</Button>
                        <div className='month'>{month} 月支出</div>
                        <Button type="ghost" size="small" inline className='btn' onClick={moreMonth}>下个月</Button>
                    </div>
                    <ul className="detail-count">
                        <li>收入：{getTotal('+')}</li>
                        <li>支出：{getTotal('-')}</li>
                        <li>结余：{getTotal('+') - getTotal('-')}</li>
                    </ul>
                </div>
                <div className='detail-container'>
                    {
                        getNewList().length === 0
                            ? <div className='detail-notFound'>
                                <Icon name='none' />
                                当前没有数据哦~
                                <NavLink to='/money' className='toMoney'>
                                    记一笔
                                </NavLink>
                            </div>
                            : <div>
                                {getNewList().map(list =>
                                    <div key={list.date} className='detail-ul'>
                                        {day(list.date).format('M月DD日')}
                                        <ul className='detail-list'>
                                            {list.list.map(r =>
                                                <li key={r.id}>
                                                    <div className='tags'>
                                                        <div><Icon name={tagName(r.tagId).id} /></div>
                                                        <div>{tagName(r.tagId).value}</div>
                                                    </div>
                                                    <div className='oneLine'>{r.note}</div>
                                                    <div className={getClass(r.type)}>{r.type + r.output}</div>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                )}
                            </div>
                    }
                </div>
            </div>
        </NavLayout >
    )
}
export default Details
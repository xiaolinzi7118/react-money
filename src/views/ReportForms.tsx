import NavLayout from "components/NavLayout"
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import ReactEcharts from 'echarts-for-react';
import { useRecordList } from "hooks/useRecordList";
import 'style/report.css'
import day from 'dayjs'

function ReportForms() {
    const { record } = useRecordList();
    const getTotal = (type: string) => {
        const a = record.filter(i => i.type === type).reduce((total, val) => {
            return total + val.output
        }, 0)
        return a
    }
    const year = day(new Date()).year()
    const getOption = () => {
        return {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            series: [
                {
                    name: "支出统计",
                    type: "pie",
                    radius: ["25%", "50%"],
                    center: ["50%", "50%"],
                    data: [
                        {
                            value: getTotal('-'),
                            name: "支出",
                            itemStyle: {
                                color: "#6fcf97",
                                fontSize: "16px",
                            },
                        },
                        {
                            value: getTotal('+'),
                            name: "收入",
                            itemStyle: {
                                color: "#eb5757",
                                fontSize: "16px",
                            },
                        },
                    ],
                },
            ],
        };
    };
    return (
        <NavLayout>
            <div className="statistics">
                <div className="year">{year} 年支出收入概览</div>
                <section className="echarts_wrap">
                    <ReactEcharts option={getOption()} lazyUpdate={false} className='echarts-report' />
                </section>
                <div className="footer">
                    支出：{getTotal('-')} 元 | 收入： {getTotal('+')} 元
                </div>
            </div>
        </NavLayout>
    )
}
export default ReportForms
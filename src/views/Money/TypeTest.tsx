import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import styled from 'styled-components';

const tabs = [
    { title: <Badge className='out'>支出</Badge> },
    { title: <Badge className='in'>收入</Badge> },
];
const Wrapper = styled.div`

`

const TypeText: React.FC = () => {
    return (
        <Wrapper>
            <Tabs tabs={tabs}
                tabBarBackgroundColor={'#ffffff'}
                initialPage={1}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log(tab) }}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fbfcff' }}>
                    Content of first tab
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fbfcff' }}>
                    Content of second tab
                </div>
            </Tabs>
            <WhiteSpace />
        </Wrapper>
    )
}
export { TypeText }
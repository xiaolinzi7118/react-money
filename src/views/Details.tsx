import NavLayout from "components/NavLayout"
import { List } from 'antd-mobile';
import { useRecordList } from "hooks/useRecordList";
import { useTagList } from "hooks/useTagsList";
import Icon from "components/Icons";
import 'style/details.css'
function Details() {
    const Item = List.Item;
    const { record } = useRecordList();
    const { tagList1, tagList2 } = useTagList();
    const tagList = tagList1.concat(tagList2)
    const tagName = (tagId: string) => tagList.filter(t => t.id === tagId)[0]
    return (
        <NavLayout>
            {record.map(r =>
                <List className="my-list" key={r.id}>
                    <Item extra={r.type + r.output}>
                        <div className='tags'>
                            <div><Icon name={tagName(r.tagId).id} /></div>
                            <div>{tagName(r.tagId).value}</div>
                        </div>
                        <div className='oneLine'>{r.note}</div>
                    </Item>
                </List>
            )}
        </NavLayout>
    )
}
export default Details
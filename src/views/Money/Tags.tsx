import Icon from "components/Icons"
import { useTagList } from "hooks/useTagsList"
import styled from "styled-components"

const Wrapper = styled.div`
.tags {
    height: 164px;
    width: 100%;
    display: flex;
    border-top: 2px solid rgba(0, 0, 0, 0.05);
    background: #fbfcff;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  
    > li {
      width: 64px;
      height: 64px;
      padding: 8px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  
      &.selected {
        background: white;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
      }
    }
  
    .icon {
      width: 2em;
      height: 2em;
      margin: 1px;
    }
  }
`
type Props = {
    value: string,
    tagId: string,
    onChange: (id: string) => void
}
const Tags: React.FC<Props> = (props) => {
    const { tagList1, tagList2 } = useTagList()
    const type = props.value
    const tagId = props.tagId
    const getClass = (id: string) => tagId === id ? 'selected' : ''
    return (
        <Wrapper>
            <ul className='tags'>
                {type === 'out' ?
                    tagList1.map(t =>
                        <li key={t.id} className={getClass(t.id)}
                            onClick={() => props.onChange(t.id)}
                        >
                            <Icon name={t.id} />
                            <div>{t.value}</div>
                        </li>
                    )
                    : tagList2.map(t =>
                        <li key={t.id} className={getClass(t.id)}
                            onClick={() => props.onChange(t.id)}
                        >
                            <Icon name={t.id} />
                            <div>{t.value}</div>
                        </li>
                    )
                }
            </ul>
        </Wrapper >
    )
}
export { Tags }
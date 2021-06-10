import styled from "styled-components"
import classNames from "classnames"

const Wrapper = styled.div`
.types {
    display: flex;text-align: center;padding-left: 20%;
    font-weight: bold;
    color: #c4c4c4;
  > li {
    height: 36px;width: 37.5%;display: flex;
    justify-content: center;align-items: center;
    position: relative;
  &.selected::after {
     content: '';position: absolute;
     bottom: 0;left: 0;width: 100%;
     height: 4px;
   }
  &.selected.out {
     color: green;
   }
  &.selected.out::after {
     background: green;
   }
  &.selected.in {
     color: #fd6d6d;
   }
  &.selected.in::after {
     background: #fd6d6d;
   }
  }
  }
`
type Props = {
  value: string,
  onChange: (value: '-' | '+') => void
}
const Type: React.FC<Props> = (props) => {
  const { value } = props
  const getClass = (t: string) => t === value ? 'selected' : ''
  return (
    <Wrapper>
      <ul className='types'>
        <li className={classNames('out', getClass('-'))}
          onClick={() => props.onChange('-')}>
          支出
                </li>
        <li className={classNames('in', getClass('+'))}
          onClick={() => props.onChange('+')}>
          收入
        </li>
      </ul>
    </Wrapper>
  )
}
export { Type }
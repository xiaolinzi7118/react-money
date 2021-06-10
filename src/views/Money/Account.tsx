import classNames from "classnames"
import styled from "styled-components"

const Wrapper = styled.div`
.count {
    font-size: 36px;
    padding: 9px 16px;
    text-align: right;
    height: 52px;
    &.out {
        color: green;
      }
    &.in {
        color: red;
    }
  }
`
type Props = {
  value: string,
  type: string
}
const Account: React.FC<Props> = (props) => {
  const { value, type } = props
  return (
    <Wrapper>
      <div className={classNames('count', { 'out': type === '-' }, { 'in': type === '+' })}>
        {value}
      </div>
    </Wrapper>
  )
}
export { Account }
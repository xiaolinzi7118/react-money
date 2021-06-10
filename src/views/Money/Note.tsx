import styled from 'styled-components';

const Wrapper = styled.section`
  background: white;
  padding: 0px 16px;
  font-size: 14px;
`;
const Label = styled.label`
display:flex;
align-items: center;
> span { margin-right: 16px; white-space: nowrap; }
> input {
  display:block;
  width: 100%;
  height: 44px;
  background: none;
  border: none;
}
`

type Props = {
	value: string;
	onChange: (value: string) => void
}
const Note: React.FC<Props> = (props) => {
	const note = props.value
	return (
		<Wrapper>
			<Label>
				<span>备注</span>
				<input
					type='text'
					placeholder='在这里输入备注'
					value={note}
					onChange={(e) => props.onChange(e.target.value)} />
			</Label>
		</Wrapper>
	)
}
export { Note }
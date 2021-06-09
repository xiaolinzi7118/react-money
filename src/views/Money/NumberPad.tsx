import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display:flex;
  flex-direction: column;
  > .output{
    background:white;
    font-size: 36px;
    line-height: 72px;
    text-align:right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                inset 0 5px 5px -5px rgba(0,0,0,0.25);
  }
  > .pad{ 
    > button{
      font-size: 18px; float: left; width: 25%; height: 64px; border: none;
      &.ok{ height: 128px; float: right; }
      &.zero{ width: 50%; }
      &:nth-child(1){
        background:#ebafcb;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background:#e79fc0;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background:#e38eb6;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background:#df7eab;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background:#db6ea1;
      }
      &:nth-child(12) {
        background:#d34d8b;
      }
      &:nth-child(14) {
        background:#d75d96;
      }
    }
  }
`;

type Props = {
  value: string;
  onChange: (value: string) => void
  onOk: () => void
}
const NumberPad: React.FC<Props> = (props) => {
  const [count, _setCount] = useState(props.value)
  const setCount = (newCount: string) => {
    if (newCount.length > 16) {
      _setCount(newCount.slice(0, 15))
    } else if (newCount.length === 0) {
      _setCount('0')
      props.onChange('0')
      return
    } else {
      _setCount(newCount)
    }
    props.onChange(newCount)
  }
  const onClickButton = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) { return }
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (count === '0') {
          setCount(text)
        } else {
          setCount(count + text)
        }
        break;
      case '.':
        if (count.indexOf(text) >= 0) {
          return
        } else {
          setCount(count + text)
        }
        break;
      case '删除':
        if (count !== '0') {
          setCount(count.slice(0, -1))
        }
        break;
      case '清空':
        setCount('0')
        break;
      case 'OK':
        props.onOk()
        _setCount('0')
        break;
    }
  }
  return (
    <Wrapper>
      <div className="pad clearfix" onClick={onClickButton}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button className="dot">.</button>
      </div>
    </Wrapper>
  )
}

export { NumberPad }
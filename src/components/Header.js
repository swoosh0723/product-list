import styled from 'styled-components'

import { ReactComponent as Logo } from '../icons/logo-musinsa.svg';

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
`

function Header() {
  return (
    <HeaderWrap>
      <Logo></Logo>
    </HeaderWrap>
  )
}

export default Header
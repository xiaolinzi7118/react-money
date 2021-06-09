import { NavLink } from "react-router-dom"
import styled from "styled-components";

const Nav = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
 >ul{
   display:flex;
   >li{
    width: 33.3333%;
    text-align:center;
    font-size:12px;
    >a{
        display: flex;
        flex-direction: column;
        padding: 4px 0;
        justify-content: center;
        align-items: center;
        .icon {
          width: 24px;      
          height: 24px;
        }
        &.selected{
            color:#ff6c6f;
            .icon{
                fill:#ff6c6f;
            }
        }
    }
   }
 }
`;
const Wrapper = styled.div`
  height: 100vh;
  display:flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;
const NavLayout = (props: any) => {
    return (
        <Wrapper>
            <Main>
                {props.children}
            </Main>
            <Nav>
                <ul>
                    <li>
                        <NavLink to="/money" activeClassName='selected'>
                            记账
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/details" activeClassName='selected'>
                            统计
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/reportForms" activeClassName='selected'>
                            报表
                        </NavLink>
                    </li>
                </ul>
            </Nav>
        </Wrapper>
    )
}
export default NavLayout
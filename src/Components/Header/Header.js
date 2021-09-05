import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Search} from "../Search/Search";
import {HiMoon} from "react-icons/hi";
import {CgSun} from "react-icons/cg";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Toggle = styled.button`
  cursor: pointer;    
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border:none;
  background-color: ${props => props.theme.titleColor};
  color: ${props => props.theme.pageBackground}
  transition: all .5s ease;
`

 export function Header(props) {

     function changeTheme() {
         if (props.theme === "light") {
             props.setTheme('dark');
         } else {
             props.setTheme("light");
         }
     }

     const icon = props.theme === 'light' ? <HiMoon size={40}/> : <CgSun size={40}/>
  return (
          <div className={'wrap-header'}>
              <div className={'home'}>
                  <Link to={'/'}><h3>Movie App</h3></Link>
              </div>
              <Search/>
              <Toggle onClick={changeTheme} >
                  {icon}
              </Toggle>
          </div>
  )
}
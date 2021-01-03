import { NavigateBeforeSharp } from '@material-ui/icons'
import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import SideNavigation from './sideNav'

export default function Header(props) {
    const displayLogo = () =>{
        return(
            <Link to = "/" >
            <img alt = "nba logo" src = "/images/nba_logo.png"  />
           
           </Link>
        )     
    }
    const navBars = () =>{
        return(
            <div className = "header__bars">
                <FontAwesomeIcon icon={faBars} 
                    onClick = {props.onOpenNav}
                    style = {{
                    color: '#dfdfdf',
                    padding: '10px',
                    cursor: 'pointer'
                }} />
            </div>
        )
    }
    return (
       <header className = "header" >
           <SideNavigation {...props} />
           <div className ="header__logo">
            {displayLogo()}
           </div>
           <div className = "header__menu">
              {navBars()}
           </div>
       </header>
    )
}

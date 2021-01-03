import React from 'react';
import {Link} from 'react-router-dom'
const SideNavItems = () => {
    const items = [
        {
            type: "sideNav__options",
            text: 'Home',
            link: '/'
        },
        {
            type: "sideNav__options",
            text: 'News',
            link: '/news'
        },
        {
            type: "sideNav__options",
            text: 'Videos',
            link: '/videos'
        }
        ,
        {
            type: "sideNav__options",
            text: 'Sign in',
            link: '/Signin'
        },
        {
            type: "sideNav__options",
            text: 'Sign out',
            link: '/signout'
        }
    ]

    const showItems  = () =>{
        return items.map((item, i) =>{
            return(
                <div key = {i} className = "sideNav__options">
                    <Link to = {item.link}>
                         {item.text}
                    </Link>
                 </div>
            )
        })   
    }

    return (
       <div>
           {showItems()}
       </div>
    );
};

export default SideNavItems;

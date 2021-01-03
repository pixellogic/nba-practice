import { Switch } from '@material-ui/core';
import React from 'react';
import {Link} from 'react-router-dom'
const Button = (props) => {
   let template = ''
   switch(props.type){
       case('loadMore'):
            template = (
                <div className = "btn--blue"
                    onClick = {props.loadMore}
                    >
                        {props.cta}
                </div>
            )
        break
        case('linkTo'):
            template = (
                <Link to = {props.linkTo} className = "btn--blue">
                          {props.cta}
                </Link>
            )
            break
        default:
            template = null
    }
    return template
};

export default Button;
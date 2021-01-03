import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
const CardInfo = (props) => {

    const teamName = (teams, team) =>{
        let data = teams.find((item) =>{
            return item.id === team
        })
        if(data){
            return data.name
        }else{
            return null
        }
    }
    return (
        <div className = "card__info">
            <span className = "card__info--team">
               {teamName(props.teams, props.team)}
            </span>
            <span className = "card__info--date">
                <FontAwesomeIcon icon = {faClock} />
                {props.date}
            </span>
        </div>
    );
};

export default CardInfo;
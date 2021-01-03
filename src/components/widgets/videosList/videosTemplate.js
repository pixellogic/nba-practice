import React from 'react';
import {Link} from 'react-router-dom'
import CardInfo from '../cardInfo/cardInfo'
const VideosTemplate = (props) => {
    console.log('videotemplate', props)
   return props.data.map((item, i) =>(
        
       <Link to ={`/videos/${item.id}`} key = {i}>
           <div className = "videoList__item">
                <div className = "left"
                    style = {{
                        background: `url(/images/videos/${item.image})`,
                        backgroundSize: 'cover'
                    }}
                >
                    <div
                    style={{
                        width: '9rem',
                        height: '9rem',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat !important',
                        backgroundPosition: 'center ',
                        background: 'url(/images/play.png)',
                        backgroundColor: 'transparent'
                    }}></div>
                </div>
                <div className = "right" style={{
                    flexGrow: '1',
                    padding: '10px'
                }}>
                    <CardInfo  teams = {props.teams} team = {item.team} date = {item.date}/>
                    <h2>{item.title}</h2>
                </div>
           </div>
       </Link>
   ))
};

export default VideosTemplate;
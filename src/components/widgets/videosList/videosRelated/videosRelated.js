import React from 'react';
import VideosTemplate from '../videosTemplate'
const VideosRelated = (props) => {
    return (
        <div className = "relatedWrapper">
            <VideosTemplate 
                            data = {props.videos}
                            teams = {props.teams}
                            />
        </div>
    );
};

export default VideosRelated;
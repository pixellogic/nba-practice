import React from 'react';
import VideosList from '../../../../../widgets/videosList/videosList'
const VideosMain = () => {
    return (
        <div>
           <VideosList 
                type = "card"
                title = {false}
                loadMore = {false}
                start = {0}
                amount = {8}
           />
        </div>
    );
};

export default VideosMain;
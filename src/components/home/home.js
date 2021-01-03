import React from 'react';
import NewsSlider from '../widgets/newsSlider/newsSlider'
import NewsList from '../widgets/newsList/newsList'
import VideosList from '../widgets/videosList/videosList'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
const Home = () => {
    return (
        <div>
            <NewsSlider
                type = "featured"
                start = {3}
                amount = {6}
                settings = {{
                    dots: false
                }}               
            />
            <NewsList 
                type= "card"
                loadMore = {true}
                start = {3}
                amount = {3}
            />
            <VideosList
                type = "card"
                title = {true}
                loadMore = {false}
                start = {0}
                amount = {3}
            />
        </div>
    );
};

export default Home;
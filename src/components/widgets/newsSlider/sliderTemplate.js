import { Switch } from '@material-ui/core';
import React from 'react';
import Slick from 'react-slick'
import {Link} from 'react-router-dom'
const SliderTemplate = (props) => {
   
    let template = null;
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        SlidesToScroll:1,
        ...props.settings
    }

    
    switch(props.type){
        case ('featured'):
            template = props.data.map((item, i) =>{
                return(
                    <div key = {i}>
                        <div className = "slider">
                            <div className = "slider__img"
                                style = {{
                                    backgroundImage: `url(/images/articles/${item.image})`
                                    
                                }}
                            >
                            </div>
                            <Link to = {`/articles/${item.id}`}>
                                <div className = "slider__caption">
                                {item.title}
                                </div>                                
                            </Link>

                        </div>
                    </div>
                )
            })
            break
        default:
            template = null
    }

  
    return (
        <Slick {...settings}>
            {template}
        </Slick>
    );
};

export default SliderTemplate;
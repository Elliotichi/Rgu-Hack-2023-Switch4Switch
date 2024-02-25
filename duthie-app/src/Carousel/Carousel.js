import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { Place } from "./Place";
import { trail_points } from "../data/points"; 



const places = []

for(var i = 0; i < trail_points.length; i++){
    places.push({name:trail_points[i].name, description:trail_points[i].description, img:trail_points[i].image});
}


export function Carousel(props) {
    
    // handlers to swipe left and right
    const handlers = useSwipeable({
        onSwipedLeft: () => switchCarousel(props.currentCarousel - 1, "right"),
        onSwipedRight: () => switchCarousel(props.currentCarousel + 1, "left"),
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackMouse: true
    });

    const switchCarousel = (itemNum, direction) => {
        props.setCurrentCarousel(getPlace(itemNum));
    }

    const getPlace = (num) => {
        return (num + places.length) % places.length; 
    }

    return (

        <div {...handlers}>
            <Place
                name={places[props.currentCarousel].name}
                description={places[props.currentCarousel].description} 
                img={places[props.currentCarousel].img}/>
        </div>

    );
}   
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { Place } from "./Place";


const places = [
    { name: "cunt1", description: "description", },
    { name: "cunt2", description: "description", },
    { name: "cunt3", description: "description", },
    { name: "cunt4", description: "description", },
]


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
                description={places[props.currentCarousel].description} />
        </div>

    );
}   
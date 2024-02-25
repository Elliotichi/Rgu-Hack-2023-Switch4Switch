import React, { useEffect, useState } from "react";
import { Course } from "./Course";
import { useSwipeable } from 'react-swipeable';
import { Slide } from "@mui/material";

const courses = [
    {name: "Short course", info: "Explore Duthie Park through a shorter walk!", distance: 1},
    {name: "Long course", info: "Enjoy a longer walk through Duthie Park!", distance: 1.9},
    {name: "Duthie Park Wildlife Trail", info: "Can you find all 12 rubbing plaques depicting some of the park's wildlife?", distance: 1.2},
]

export function CourseList(props) {
    const [currentCourse, setCurrentCourse] = useState(0);
    const [isSwitchCourse, setIsSwitchCourse] = useState(true);
    const [direction, setDirection] = useState("left");

    // not used right now
    useEffect(() => {
        console.log(isSwitchCourse);
    }, [isSwitchCourse])

    const getCourse = (num) => {
        return (num + courses.length) % courses.length; 
    }

    const switchCourse = (num, dir) => {
        console.log("swipe " + dir);
        setDirection(dir);
        setCurrentCourse(getCourse(num));
        // setIsSwitchCourse(false); // slide transition - off because slide back in not working
    }

    // handlers to swipe left and right
    const handlers = useSwipeable({
        onSwipedLeft: () => switchCourse(currentCourse - 1, "right"),
        onSwipedRight: () => switchCourse(currentCourse + 1, "left"),
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackMouse: true
    });

    return (
        <div>
            <Slide direction={direction} in={isSwitchCourse} mountOnEnter>
                <div {...handlers}>
                    <Course 
                        name={courses[currentCourse].name} 
                        distance={courses[currentCourse].distance} 
                        info={courses[currentCourse].info}/>
                </div>
            </Slide>
        </div>
    );
}
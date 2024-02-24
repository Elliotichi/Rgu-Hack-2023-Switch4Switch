import { Course } from "./Course";
import { useSwipeable } from 'react-swipeable';

export function CourseList(props) {
    // handlers to swap left and right
    const handlers = useSwipeable({
        onSwipedLeft: () => console.log("swiped left"),
        onSwipedRight: () => console.log("swiped right"),
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackMouse: true
    });

    return (
        <div {...handlers}>
        <Course name={"course"} distance={10} info={"information sudhfui shdi fuishiof iohjfiosdh fiohsdofuosdh iofhisodh fio shiodhfio siohiofiod hiosdhfio siodh fioshiodf iosdiofh shfsio"}/>
        </div>
    );
}
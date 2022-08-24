import { useState } from "react";

const UseTimeHook = () => {

    const getTimeDuration = () => {
        let date = new Date();
        return `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
    }
    const [time, setTime] = useState(getTimeDuration());

    setTimeout(() => {
        setTime(getTimeDuration());
    }, 1000);

    return [time];
}
export default UseTimeHook;
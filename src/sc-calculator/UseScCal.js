import { useState } from "react";

export const UseScCal = () => {
    const [ scCal, setScCal ] = useState('sc');

    const toggleScCal = () => {
        scCal === 'sc' ? setScCal('bc') : setScCal('sc')
    }
    return [ scCal, toggleScCal ];
}
import React from "react";
import classes from "./FiveDayData.module.css";
import { setWeatherIcon } from "./DataFunctions/weatherIcon";

const FiveDayData = (props) => {

    return (
        <>
            {props.arr.map((val) => {
                var icon = setWeatherIcon(val.icon);
                return (<div key={val.day} >
                    <p>{val.day}</p>
                    <img src={icon} ></img>
                    <p>
                        <span>{val.max}°</span>
                        <span>{val.min}°</span>
                    </p>
                </div>)
            })}
        </>
    );
}

export default FiveDayData;
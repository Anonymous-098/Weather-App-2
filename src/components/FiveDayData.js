import React from "react";
import classes from "./FiveDayData.module.css";
import { setWeatherIcon } from "./DataFunctions/weatherIcon";

const FiveDayData = (props) => {

    return (
        <>
            {props.arr.map((val) => {
                var icon = setWeatherIcon(val.icon);
                return (<div key={val.day} className={classes.flexItem} >
                    <p>{val.day}</p>
                    <img src={icon} ></img>
                    <p className={classes.spacing}>
                        <span className={classes.maxTemp}>{val.max}°</span>
                        <span className={classes.minTemp}>{val.min}°</span>
                    </p>
                </div>)
            })}
        </>
    );
}

export default FiveDayData;
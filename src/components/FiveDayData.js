import React from "react";
import classes from "./FiveDayData.module.css";
import { setWeatherIcon } from "./DataFunctions/weatherIcon";

const FiveDayData = (props) => {

    return (
        <>
            {props.arr.map((val) => {
                var icon = setWeatherIcon(val.icon);
                return (<div key={val.day} className={classes.gridItem} >
                    <div className={classes.day}>{val.day}</div>
                    <img src={icon} className={classes.icon} ></img>
                    <div className={classes.spacing}>
                        <span className={classes.maxTemp}>{val.max}°</span>
                        <span className={classes.minTemp}>{val.min}°</span>
                    </div>
                </div>)
            })}
        </>
    );
}

export default FiveDayData;
import React, { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa"
import classes from "./Data.module.css";
import thermometer from "../icons/animation-ready/thermometer.svg";
import raindrop from "../icons/animation-ready/raindrop.svg";
import wind from "../icons/animation-ready/wind.svg";
import celsius from "../icons/animation-ready/celsius.svg";
import fahrenheit from "../icons/animation-ready/fahrenheit.svg";
import { setWeatherIcon } from "./DataFunctions/weatherIcon";
import { getWeatherForecast } from "./DataFunctions/weatherForecast";
import FiveDayData from "./FiveDayData";

const Data = (props) => {
    
    var data = props.cityDetails;
    var date = data.date_time_wti.slice(0, 16);
    var time = data.time_12;
    var city = data.name;
    var country = data.sys.country;
    var weather = data.weather[0].description;
    var temperature = (data.main.temp - 273.15).toFixed(0);
    var windSpeed = data.wind.speed.toFixed(0);
    var humidity = data.main.humidity;
    var real_feel = (data.main.feels_like-273.15).toFixed(0);
    var high = (data.main.temp_max - 273.15).toFixed(0);
    var low = (data.main.temp_min - 273.15).toFixed(0);
    
    var day = data.date_time_wti.slice(0,3);
    var temp = setWeatherIcon(weather);
    var list = data.list;
    var arr = getWeatherForecast(list,day);
    
    return (
        <div className={classes.dataContainer}>
            <div className={classes.dateTime}>
                <span>{date} | Local Time: {time}</span>
            </div>
            <div className={classes.city}>
                <span>{city}, {country}</span>
            </div>
            <div className={classes.weather}>
                <span>{weather}</span>
            </div>
            <div className={classes.weatherData}>
                <img src={temp} className={classes.animation}></img>
                <span className={classes.tempValue}>{temperature}<img src={celsius} className={classes.celsius}></img></span>
                <div className={classes.desc}>
                    <span><img src={thermometer}></img>Real feel : {real_feel} <sup className={classes.degree}>o</sup></span>
                    <span><img src={raindrop}></img>Humidity : {humidity}%</span>
                    <span><img src={wind}></img>Wind : {windSpeed}km/h</span>
                </div>
            </div>
            <div>
                <span className={classes.high_low}>
                    <FaArrowUp className={classes.highIcon} /><span className={classes.wordWeight}>High : </span>{high}<sup className={classes.degree}>o</sup><span className={classes.line}>|</span><FaArrowDown className={classes.lowIcon} /> <span className={classes.wordWeight}>Low :</span>{low}<sup className={classes.degree}>o</sup>
                </span>
            </div>
            <div className={classes.next5}>NEXT 5 DAYS</div>
            <div className={classes.forecast}>
                <FiveDayData arr={arr} />
            </div>
        </div>
    );
}

export default Data;
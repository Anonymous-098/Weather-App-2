import React, { useState } from "react";
import classes from "./Form.module.css";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import Data from "./Data";

const Form = (props) => {
    const [value, setValue] = useState("");
    const [isLoading,setIsLoading] = useState(false);

    const inputHandler = (e) => {
        setValue(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setIsLoading(true);
        async function getWeather() {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=2a95407562161c907213d3c692c06e9a`);
            const response1 = await axios.get(`https://api.ipgeolocation.io/timezone?apiKey=c660ea76f4674b9e98448b50ae4371d2&location=${value}`);
            const response2 = await axios.get("https://api.openweathermap.org/data/2.5/forecast?q=Hisar&appid=2a95407562161c907213d3c692c06e9a");
            var weather_det = response.data;
            var date_time_det = response1.data;
            var forecast = response2.data;
            var all_det = {
                ...weather_det,
                ...date_time_det,
                ...forecast
            }
            props.setCityDetails(all_det);
            setIsLoading(false);
        }
        getWeather();
        setValue("");
    }

    return (
        <div>
            <form className={classes.form} onSubmit={submitHandler}>
                <input className={classes.input} type="text" placeholder="Search for a city here" onChange={inputHandler} value={value} ></input>
                <button type="submit" className={classes.icon} ><FaSearch /></button>
            </form>
            {isLoading && <InfinitySpin color="#ffffff" />}
            {!isLoading && <Data cityDetails={props.cityDetails} />}
        </div>
    )
}

export default Form;
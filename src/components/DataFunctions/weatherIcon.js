import rain from "../../icons/rain.svg";
import clear_sky from "../../icons/clear-day.svg";
import few_clouds from "../../icons/partly-cloudy-day.svg";
import snow from "../../icons/snow.svg";
import mist from "../../icons/mist.svg";
import thunderstorm from "../../icons/thunderstorms.svg";
import broken_clouds from "../../icons/overcast.svg";
import scattered_clouds from "../../icons/cloudy.svg"
import shower_rain from "../../icons/hail.svg";
import haze from "../../icons/haze.svg";

export function setWeatherIcon (weather){
    if (weather === "clear sky") {
        return clear_sky;
    }
    else if (weather === "few clouds") {
        return few_clouds;
    }
    else if (weather === "scattered clouds") {
        return scattered_clouds;
    }
    else if (weather === "broken clouds" || weather === "overcast clouds") {
        return broken_clouds;
    }
    else if (weather === "shower rain" || weather==="light intensity drizzle" ) {
        return shower_rain;
    }
    else if (weather === "rain" || weather === "light rain" || weather==="moderate rain" || weather==="heavy intensity rain") {
        return rain;
    }
    else if (weather === "thunderstorm") {
        return thunderstorm;
    }
    else if (weather === "snow") {
        return snow;
    }
    else if (weather === "mist") {
        return mist;
    }
    else if (weather === "haze") {
        return haze;
    }
}
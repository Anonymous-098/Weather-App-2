import rain from "../../icons/animation-ready/rain.svg";
import clear_sky from "../../icons/animation-ready/clear-day.svg";
import few_clouds from "../../icons/animation-ready/partly-cloudy-day.svg";
import snow from "../../icons/animation-ready/snow.svg";
import mist from "../../icons/animation-ready/mist.svg";
import thunderstorm from "../../icons/animation-ready/thunderstorms.svg";
import broken_clouds from "../../icons/animation-ready/overcast.svg";
import scattered_clouds from "../../icons/animation-ready/cloudy.svg"
import shower_rain from "../../icons/animation-ready/hail.svg";
import haze from "../../icons/animation-ready/haze.svg";

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
    else if (weather === "rain" || weather === "light rain" || weather==="moderate rain") {
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
export function getWeatherForecast(list,currentDay) {

    var futureDays;
    if(currentDay==="Mon"){
        futureDays = ["Tue","Wed","Thu","Fri","Sat"];
    }
    else if(currentDay==="Tue"){
        futureDays = ["Wed","Thu","Fri","Sat","Sun"];
    }
    else if(currentDay==="Wed"){
        futureDays = ["Thu","Fri","Sat","Sun","Mon"];
    }
    else if(currentDay==="Thu"){
        futureDays = ["Fri","Sat","Sun","Mon","Tue"];
    }
    else if(currentDay==="Fri"){
        futureDays = ["Sat","Sun","Mon","Tue","Wed"];
    }
    else if(currentDay==="Sat"){
        futureDays = ["Sun","Mon","Tue","Wed","Thu"];
    }
    else if(currentDay==="Sun"){
        futureDays = ["Mon","Tue","Wed","Thu","Fri"];
    }

    var arr = [];

    if (list[0].dt_txt.slice(11, 19) === "00:00:00") {
        arr = [0, 8, 8, 8, 8, 8];
    }
    else if (list[0].dt_txt.slice(11, 19) === "03:00:00") {
        arr = [7, 8, 8, 8, 8, 1];
    }
    else if (list[0].dt_txt.slice(11, 19) === "06:00:00") {
        arr = [6, 8, 8, 8, 8, 2];
    }
    else if (list[0].dt_txt.slice(11, 19) === "09:00:00") {
        arr = [5, 8, 8, 8, 8, 3];
    }
    else if (list[0].dt_txt.slice(11, 19) === "12:00:00") {
        arr = [4, 8, 8, 8, 8, 4];
    }
    else if (list[0].dt_txt.slice(11, 19) === "15:00:00") {
        arr = [3, 8, 8, 8, 8, 5];
    }
    else if (list[0].dt_txt.slice(11, 19) === "18:00:00") {
        arr = [2, 8, 8, 8, 8, 6];
    }
    else {
        arr = [1, 8, 8, 8, 8, 7];
    }

    var listData = new Array(6);
    for (var i = 0; i < 6; i++) {
        listData[i] = new Array(arr[i]);
    }

    var k = 0;
    var x = 0;
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < arr[i]; j++) {
            listData[i][j] = list[x];
            x++;
        }
    }

    var final = new Array(5);

    for (var i = 1; i < 6; i++) {
        var min = 999;
        var max = -999;
        var icon;
        for (var j = 0; j < arr[i]; j++) {
            if (listData[i][j].main.temp_min < min)
                min = listData[i][j].main.temp_min;
            if (listData[i][j].main.temp_max > max)
                max = listData[i][j].main.temp_max;
        }
        min = min - 273.15;
        max = max - 273.15;
        icon = listData[i][0].weather[0].description;

        var obj = {
            min:min.toFixed(0),
            max:max.toFixed(0),
            icon:icon,
            day:futureDays[i-1]
        }
        final[i] = obj;
    }

    return final;
}
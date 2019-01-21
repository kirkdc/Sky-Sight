const apiKey = 'd0f81f2bec9dfb355fdef3164115793f';
//const url = 'http://api.openweathermap.org/data/2.5/weather?q=';

const url = '//api.openweathermap.org/data/2.5/weather?';


let lat;
let lon;


$.getJSON('https://ipapi.co/json/', function (data) {
    //    console.log(JSON.stringify(data));
    console.log("This is the IP location API ============>" + JSON.stringify(data, null, 2));
    let a = (JSON.stringify(data.latitude));
    let b = (JSON.stringify(data.longitude));
    let c = (JSON.stringify(data.region));
    let d = (JSON.stringify(data.country_name));

    lat = a.replace(/\"/g, "");
    lon = b.replace(/\"/g, "");
    state = c.replace(/\"/g, "");
    country = d.replace(/\"/g, "");

    console.log("Longtitude and Latitude without quotes = " + lat, lon);

    function makeQueryString() {

        return url + 'lat=' + lat + "&lon=" + lon + '&units=metric&appid=' + apiKey;
    }

    function getWeather() {
        let queryString = makeQueryString();
        console.log(queryString);
        $.getJSON(queryString, response => {
            console.log(response);
            //var colorClass = response.main.humidity > 50 ? 'blue' : 'red'; // to change the color of the text according to the temp
            //var p = '<p class="'+ colorClass +'">';
            let weather = "<h4 class='responseHeader'>Current weather for: " + state + ", " + country +
                "</h4>" + "<br>" +
                "<b class='response'>Weather: </b>" + "<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' height= 35px; width= 35px; >" + response.weather[0].main + "<br>" + "<br>" +
                "<b class='response'>Average Temp.: </b>" + response.main.temp + "&#8451" + "<br>" + "<br>" +
                "<b class='response'>Max Temp.: </b>" + response.main.temp_max + "&#8451" + "<br>" + "<br>" +
                "<b class='response'>Min Temp.: </b>" + response.main.temp_min + "&#8451" + "<br>" + "<br>" +
                "<b class='response'>Humidity: </b>" + response.main.humidity + "%" + "<br>" + "<br>" +
                "<b class='response'>Wind Speed: </b>" + response.wind.speed + "m/s" + "<br>" + "<br>" +
                "<b class='response'>Wind Direction: </b>" + response.wind.deg + "&#176" + "<br>" + "<br>" +
                "<b class='response'>Pressure: </b>" + response.main.pressure + "hpa" + "<br>" + "<br>";

            document.getElementById('responseField').insertAdjacentHTML('afterbegin', weather);

            let changeBg = function (background) {

                if (id <= 299) {
                    $("#dynamic-bg").addClass("thunder");
                    console.log("THUNDERSTORM");
                    
                } else if (id <= 399) {
                    $("#dynamic-bg").addClass("drizzle");
                    console.log("DRIZZLE");
                    
                } else if (id <= 599) {
                    $("#dynamic-bg").addClass("rain");
                    console.log("RAIN");
                    
                } else if (id <= 699) {
                    $("#dynamic-bg").addClass("snow");
                    console.log("SNOW");
                    
                } else if (id <= 799) {
                    $("#dynamic-bg").addClass("smoke");
                    console.log("SMOKE");
                    
                } else if (id == 800) {
                    $("#dynamic-bg").addClass("clear");
                    console.log("CLEAR");
                    
                } else {
                    $("#dynamic-bg").addClass("clouds");
                    console.log("CLOUDS")
                }
            }

            let id = response.weather[0].id;
            changeBg(id);
        });
    }
    getWeather();


});

let nav = false;

        function show_hide_nav(id) {
            let navbar = document.getElementById(id);

            if (nav == false) {
                navbar.style.display = "block";
                nav = true;
            } else {
                navbar.style.display = "none";
                nav = false;
            }
        }
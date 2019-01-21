//http://api.openweathermap.org/data/2.5/forecast?q=Mumbai&mode=xml&units=metric&appid=d0f81f2bec9dfb355fdef3164115793f
const apiKey = 'd0f81f2bec9dfb355fdef3164115793f';
const url = '//api.openweathermap.org/data/2.5/forecast?q=';




const $searchBar = $('#input'); //linked to the user input field
const $searchBtn = $('#searchBtn'); //linked to the search button
//const $searchBtn2 = $$('#searchBtn2');
const $responseField = $('#responseField'); //linked to the allocated response area



//http://api.openweathermap.org/data/2.5/forecast?q=Mumbai&units=metric&appid=d0f81f2bec9dfb355fdef3164115793f

function makeQueryString() {
    //let location = $('#input').val(); //looks like this line is unnecessary update: Back at home after gaurav edited it
    return url + $('#input').val() + '&units=metric' + '&appid=' + apiKey; //wasnt connected to #input

}


function getWeather() {
    const queryString = makeQueryString();

    $.getJSON(queryString, response => {
        console.log(response);
        //var colorClass = response.main.humidity > 50 ? 'blue' : 'red'; // to change the color of the text according to the temp
        //var p = '<p class="'+ colorClass +'">';
        var weather = "<h4 class='responseHeader'> Weather Forecast for: " + response.city.name + "," +
            response.city.country + "</h4>" + "<br>" + "<table style='width:100%'>" +
            "<tr>" +
            "<th>DATE/TIME</th>" +
            "<th>ICON</th>" +
            "<th>WEATHER</th>" +
            "<th>TEMPERATURE</th>" +
            "<th>MAX - TEMP</th>" +
            "<th>MIN - TEMP</th>" +
            "<th>HUMIDITY</th>" +
            "<th>WINDSPEED</th>" +
            "<th>WIND DIRECTION</th>" +
            "<th>PRESSURE</th>" +
            "</tr>" +
            "<tr>" +
            "<td>" + response.list[3].dt_txt + "</td>" +
            "<td>" + "<img src='http://openweathermap.org/img/w/" + response.list[3].weather[0].icon + ".png' height= 35px; width= 35px; >" + "</td>" +
            "<td>" + response.list[3].weather[0].main + "</td>" +
            "<td>" + response.list[3].main.temp + "&#8451" + "</td>" +
            "<td>" + response.list[3].main.temp_max + "&#8451" + "</td>" +
            "<td>" + response.list[3].main.temp_min + "&#8451" + "</td>" +
            "<td>" + response.list[3].main.humidity + "%" + "</td>" +
            "<td>" + response.list[3].wind.speed + "m/s" + "</td>" +
            "<td>" + response.list[3].wind.deg + "&#176" + "</td>" +
            "<td>" + response.list[3].main.pressure + "hpa" + "</td>" +
            "</tr>" +
            "<tr>" +
            "<td>" + response.list[11].dt_txt + "</td>" +
            "<td>" + "<img src='http://openweathermap.org/img/w/" + response.list[11].weather[0].icon + ".png' height= 35px; width= 35px; >" + "</td>" +
            "<td>" + response.list[11].weather[0].main + "</td>" +
            "<td>" + response.list[11].main.temp + "&#8451" + "</td>" +
            "<td>" + response.list[11].main.temp_max + "&#8451" + "</td>" +
            "<td>" + response.list[11].main.temp_min + "&#8451" + "</td>" +
            "<td>" + response.list[11].main.humidity + "%" + "</td>" +
            "<td>" + response.list[11].wind.speed + "m/s" + "</td>" +
            "<td>" + response.list[11].wind.deg + "&#176" + "</td>" +
            "<td>" + response.list[11].main.pressure + "hpa" + "</td>" +
            "</tr>" +
            "<tr>" +
            "<td>" + response.list[19].dt_txt + "</td>" +
            "<td>" + "<img src='http://openweathermap.org/img/w/" + response.list[19].weather[0].icon + ".png' height= 35px; width= 35px; >" + "</td>" +
            "<td>" + response.list[19].weather[0].main + "</td>" +
            "<td>" + response.list[19].main.temp + "&#8451" + "</td>" +
            "<td>" + response.list[19].main.temp_max + "&#8451" + "</td>" +
            "<td>" + response.list[19].main.temp_min + "&#8451" + "</td>" +
            "<td>" + response.list[19].main.humidity + "%" + "</td>" +
            "<td>" + response.list[19].wind.speed + "m/s" + "</td>" +
            "<td>" + response.list[19].wind.deg + "&#176" + "</td>" +
            "<td>" + response.list[19].main.pressure + "hpa" + "</td>" +
            "</tr>" +
            "<tr>" +
            "<td>" + response.list[27].dt_txt + "</td>" +
            "<td>" + "<img src='http://openweathermap.org/img/w/" + response.list[27].weather[0].icon + ".png' height= 35px; width= 35px; >" + "</td>" +
            "<td>" + response.list[27].weather[0].main + "</td>" +
            "<td>" + response.list[27].main.temp + "&#8451" + "</td>" +
            "<td>" + response.list[27].main.temp_max + "&#8451" + "</td>" +
            "<td>" + response.list[27].main.temp_min + "&#8451" + "</td>" +
            "<td>" + response.list[27].main.humidity + "%" + "</td>" +
            "<td>" + response.list[27].wind.speed + "m/s" + "</td>" +
            "<td>" + response.list[27].wind.deg + "&#176" + "</td>" +
            "<td>" + response.list[27].main.pressure + "hpa" + "</td>" +
            "</tr>" +
            "<tr>" +
            "<td>" + response.list[35].dt_txt + "</td>" +
            "<td>" + "<img src='http://openweathermap.org/img/w/" + response.list[35].weather[0].icon + ".png' height= 35px; width= 35px; >" + "</td>" +
            "<td>" + response.list[35].weather[0].main + "</td>" +
            "<td>" + response.list[35].main.temp + "&#8451" + "</td>" +
            "<td>" + response.list[35].main.temp_max + "&#8451" + "</td>" +
            "<td>" + response.list[35].main.temp_min + "&#8451" + "</td>" +
            "<td>" + response.list[35].main.humidity + "%" + "</td>" +
            "<td>" + response.list[35].wind.speed + "m/s" + "</td>" +
            "<td>" + response.list[35].wind.deg + "&#176" + "</td>" +
            "<td>" + response.list[35].main.pressure + "hpa" + "</td>" +
            "</tr>" +
            "</table>";

        document.getElementById('responseField').insertAdjacentHTML('afterbegin', weather);
        
        
        let changeBg = function (background) {

                if (id <= 299) {
                    $("#dynamic-bg")
                    .removeClass()
                    .addClass("thunder");
                    console.log("THUNDERSTORM");
                    
                } else if (id <= 399) {
                    $("#dynamic-bg")
                    .removeClass()
                    .addClass("drizzle");
                    console.log("DRIZZLE");
                    
                } else if (id <= 599) {
                    $("#dynamic-bg")
                    .removeClass()
                    .addClass("rain");
                    console.log("RAIN");
                    
                } else if (id <= 699) {
                    $("#dynamic-bg")
                    .removeClass()
                    .addClass("snow");
                    console.log("SNOW");
                    
                } else if (id <= 799) {
                    $("#dynamic-bg")
                    .removeClass()  
                    .addClass("smoke");
                    console.log("SMOKE");
                    
                } else if (id == 800) {
                    $("#dynamic-bg")
                    .removeClass()
                    .addClass("clear");
                    console.log("CLEAR");
                    
                } else {
                    $("#dynamic-bg")
                    .removeClass()   
                    .addClass("clouds");
                    console.log("CLOUDS")
                }
            }

            let id = response.list[3].weather[0].id;
            changeBg(id);
        
    });
}




//stop the enter key from refreshing the page
$(function () {
    $("form").submit(function () {
        return false;
    }) 
});

//if the search box is empty
function searchBtn() {
    $responseField.empty();
    getWeather();
    return false;
}


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


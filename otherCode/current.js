const apiKey = 'd0f81f2bec9dfb355fdef3164115793f';
const url = '//api.openweathermap.org/data/2.5/weather?q=';




const $searchBar = $('#input'); //linked to the user input field
const $searchBtn = $('#searchBtn'); //linked to the search button
const $responseField = $('#responseField'); //linked to the allocated response area




//'http://api.openweathermap.org/data/2.5/weather?q=France&appid=d0f81f2bec9dfb355fdef3164115793f'

//cityName '={city name here}
//apiCode '&appid=d0f81f2bec9dfb355fdef3164115793f'
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
        var weather = "<h4 class='responseHeader'>Current weather for: " + response.name + ", " +
            response.sys.country + "</h4>" + "<br>" +
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

            let id = response.weather[0].id;
            changeBg(id);
        
    });
}

//stop the enter key from refreshing the page
$(function () {
    $("form").submit(function () {
        return false;
    }) 
});


//tried to get enter to submit form but it doesnt work!!!
//$("#input").keyup(function(event) {
//    if (event.keyCode == 13) {
//        $("#searchBtn").click();
//    }
//}); 



//if the search box is empty
function searchBtn() {
    $responseField.empty();
    getWeather();
    return false;
}


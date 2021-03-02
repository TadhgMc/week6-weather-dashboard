var searchForm = $('.seachForm'); //whole form element with the search bar
var searchBox = $('#searchBox'); // specific input box for searching cities
var currentDay = $('.currentDay'); //whole card for surrent day
var firstDay = $('.1day'); //whole card for first day
var secondDay = $('.2day'); //whole card for second day
var thirdDay = $('.3day'); //whole card for third day
var fourthDay = $('.4day'); //whole card for fourth day
var fifthDay = $('.5day'); //whole card for fifth day

var checkHere = searchBox.value;
var weatherUrl = `http://api.openweathermap.org/data/2.5/find?q=${checkHere}&units=imperial&appid=096317ae116f5805e156e4177ebd6d5a`

// open weather api base url http://api.openweathermap.org/ --api key in notepad doc--
// api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}
// API DOCS current weather https://openweathermap.org/current
//zip code is <zip> ; City name, state code and country code divided by comma <q>
// http://api.openweathermap.org/data/2.5/find?q=Columbus&units=imperial&appid=096317ae116f5805e156e4177ebd6d5a
//example of useable url , doesn't appear to be case sensitive

//current day info
/* will always need cityname <name>, date (Time of data calculation, unix, UTC) (may also need <timezone> for shift in seconds from UTC) <dt>,
weather icon <weather.icon>, temp <main.temp>, humidity <main.humidity>, wind speed <wind.speed>, UV index (not sure i can get this) */

//forecast info 
// API DOCS forecasted weather https://openweathermap.org/forecast5
// example url http://api.openweathermap.org/data/2.5/forecast?q=columbus&units=imperial&appid=096317ae116f5805e156e4177ebd6d5a
/* will always need date <list.dt>, icon of weather conditions <list.weather.icon>, temp <list.main.temp>, humidity <list.main.humidity> */



function getWeather (/*can make a variable here be that is then referenced in function*/){
    //make a check to see if something has been searched before, and get repeat search info from local storage
    fetch(weatherUrl)
    .then(function(response) {
        //return response.json();
    })
    .then(function(data) {

    })
}

//currently just example code
getWeather(/* here is where to put outside variable that the function variable will point to */); 
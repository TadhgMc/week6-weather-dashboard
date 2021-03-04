const searchForm = $('.seachForm'); //whole form element with the search bar
const searchInput = $('.searchInput'); // specific input box for searching cities
const searchBtn = $('.searchBtn'); //class calling to search button
const currentDay = $('.currentDay'); //whole card for current day
const firstDay = $('.1day'); //whole card for first day
const secondDay = $('.2day'); //whole card for second day
const thirdDay = $('.3day'); //whole card for third day
const fourthDay = $('.4day'); //whole card for fourth day
const fifthDay = $('.5day'); //whole card for fifth day
const searchCity = $('.city'); //city name for current weather card
const todayDate = $('.today'); //for todays date in current weather card
const currentIcon = $('.currentIcon');
const currentTemp = $('.currentTemp');
const currentHumidity = $('.currentHumidity');
const currentSpeed = $('.currentSpeed')

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
var weatherUrl = "";
searchBtn.click(function (event) {
    event.preventDefault();
    getWeather();
}); 

console.log(searchInput.val());

function getWeather (){
    //make a check to see if something has been searched before, and get repeat search info from local storage --have the buttons point to their own localstorage
    
    var checkHere = searchInput.val();
    weatherUrl = "http://api.openweathermap.org/data/2.5/find?q="+ checkHere +"&units=imperial&appid=096317ae116f5805e156e4177ebd6d5a";
    forecastUrl = "http://api.openweathermap.org/data/2.5/forecast?q="+ checkHere +"&units=imperial&appid=096317ae116f5805e156e4177ebd6d5a";
    console.log(checkHere);
    console.log(weatherUrl);
    
    

    fetch(weatherUrl)
    .then(function (response) {
        //make if : if bad response, say so
        console.log(response)
        return response.json();
    })
    .then( function (data) {
        console.log(data);
        console.log(data.list[0].main.temp);
        currentIcon.text(data.list[0].weather[0].icon);
        currentTemp.text(data.list[0].main.temp);
        currentHumidity.text(data.list[0].main.humidity);
        currentSpeed.text(data.list[0].wind.speed);
    });

    fetch(forecastUrl)
    .then(function (response) {
        //make if : if bad response, say so
        console.log(response)
        return response.json();
    })
    .then( function (data) { //have to use every 8th input to get each day? since it comes in in 3 hour increments
        console.log(data);
        console.log(data.list[0]); //can add values to variables that are made outside of function
    });
}




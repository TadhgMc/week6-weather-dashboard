var searchForm = $('.seachForm'); //whole form element with the search bar
var searchInput = $('.searchInput'); // specific input box for searching cities
var searchBtn = $('.searchBtn'); //class calling to search button
var currentDay = $('.currentDay'); //whole card for current day
var firstDay = $('.1day'); //whole card for first day
var secondDay = $('.2day'); //whole card for second day
var thirdDay = $('.3day'); //whole card for third day
var fourthDay = $('.4day'); //whole card for fourth day
var fifthDay = $('.5day'); //whole card for fifth day

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
    weatherUrl = "http://api.openweathermap.org/data/2.5/find?q="+ checkHere +"&units=imperial&appid=096317ae116f5805e156e4177ebd6d5a"
    console.log(checkHere);
    console.log(weatherUrl);
    
    

    fetch(weatherUrl)
    .then(function (response) {
        //make if ; if bad response, say so
        console.log(response)
        return response.json();
    })
    .then( function (data) {
        console.log(data);
        console.log(data.list[0].main.temp)
    })
}




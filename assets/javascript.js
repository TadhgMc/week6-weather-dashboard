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
const currentIcon = $('#currentIcon');
const currentTemp = $('.currentTemp');
const currentHumidity = $('.currentHumidity');
const currentSpeed = $('.currentSpeed');
const searchedBtns = $('.searchedBtns');

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
    weatherUrl = "https://api.openweathermap.org/data/2.5/find?q="+ checkHere +"&units=imperial&appid=096317ae116f5805e156e4177ebd6d5a";
    forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q="+ checkHere +"&units=imperial&appid=096317ae116f5805e156e4177ebd6d5a";
    console.log(checkHere);
    console.log(weatherUrl);
    
    // MAKE ICON WITH <$('#icon').attr('src', `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`);>

    fetch(weatherUrl)
    .then(function (response) {
        //make if : if bad response, say so
        console.log(response)
        return response.json();
    })
    .then( function (data) {
        console.log(data);
        console.log(data.list[0].main.temp);
        $('.city').text(searchInput.val());
        $('.today').text(moment().format('M/D/YYYY'));
        currentIcon.attr('src', `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`);
        currentTemp.text(data.list[0].main.temp);
        currentHumidity.text(data.list[0].main.humidity);
        currentSpeed.text(data.list[0].wind.speed);
        console.log(data.list[0].weather[0].icon);
    });

    fetch(forecastUrl)
    .then(function (response) {
        //make if : if bad response, say so
        console.log(response)
        return response.json();
    })
    .then( function (data) {
        console.log(data);
        console.log(data.list[0]);
        $('.1Date').text(moment(data.list[7].dt_txt).format('dddd, M/D/YYYY'));
        $('.1Icon').attr('src', `https://openweathermap.org/img/wn/${data.list[7].weather[0].icon}@2x.png`);
        $('.1Temp').text(data.list[7].main.temp);
        $('.1Hum').text(data.list[7].main.humidity);

        $('.2Date').text(moment(data.list[14].dt_txt).format('dddd, M/D/YYYY'));
        $('.2Icon').attr('src', `https://openweathermap.org/img/wn/${data.list[14].weather[0].icon}@2x.png`);
        $('.2Temp').text(data.list[14].main.temp);
        $('.2Hum').text(data.list[14].main.humidity);

        
        $('.3Date').text(moment(data.list[21].dt_txt).format('dddd, M/D/YYYY'));
        $('.3Icon').attr('src', `https://openweathermap.org/img/wn/${data.list[21].weather[0].icon}@2x.png`);
        $('.3Temp').text(data.list[21].main.temp);
        $('.3Hum').text(data.list[21].main.humidity);

        $('.4Date').text(moment(data.list[28].dt_txt).format('dddd, M/D/YYYY'));
        $('.4Icon').attr('src', `https://openweathermap.org/img/wn/${data.list[28].weather[0].icon}@2x.png`);
        $('.4Temp').text(data.list[28].main.temp);
        $('.4Hum').text(data.list[28].main.humidity);

        $('.5Date').text(moment(data.list[35].dt_txt).format('dddd, M/D/YYYY'));
        $('.5Icon').attr('src', `https://openweathermap.org/img/wn/${data.list[35].weather[0].icon}@2x.png`);
        $('.5Temp').text(data.list[35].main.temp);
        $('.5Hum').text(data.list[35].main.humidity);
         
    });
    // make 'for' loop for forecast: (i=(~?)6; i<40; i+7) ?
    
    
}




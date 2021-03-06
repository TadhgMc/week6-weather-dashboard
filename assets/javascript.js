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
const currentIcon = $('#currentIcon'); // point to html img element 'currentIcon'
const currentTemp = $('.currentTemp'); // points to temp area of current weather
const currentHumidity = $('.currentHumidity'); // points to humidity area of current weather
const currentSpeed = $('.currentSpeed'); // points to wind speed area of current weather

//adds click listener to search button that runs getWeather function
searchBtn.click(function (event) {
    event.preventDefault();
    getWeather();
}); 


var weatherUrl = "";


function getWeather (){
    //getting what city is being searched for, and adding it to weather api urls
    var checkHere = searchInput.val();
    weatherUrl = "https://api.openweathermap.org/data/2.5/find?q="+ checkHere +"&units=imperial&appid=096317ae116f5805e156e4177ebd6d5a";
    forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q="+ checkHere +"&units=imperial&appid=096317ae116f5805e156e4177ebd6d5a";
    
    //fetch to get current day weather
    fetch(weatherUrl)
    .then(function (response) {
        console.log(response)
        return response.json();
    })
    .then( function (data) {
        //taking data from weather api and putting it onto the page
        $('.city').text(searchInput.val());
        $('.today').text(moment().format('M/D/YYYY'));
        currentIcon.attr('src', `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`);
        currentTemp.text(data.list[0].main.temp);
        currentHumidity.text(data.list[0].main.humidity);
        currentSpeed.text(data.list[0].wind.speed);
    });

    //fetch to get forecast information
    fetch(forecastUrl)
    .then(function (response) {
        console.log(response)
        return response.json();
    })
    .then( function (data) {
        //taking forecast data from api and putting it on the page
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
}




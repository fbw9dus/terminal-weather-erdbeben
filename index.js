
const axios = require('axios')
const fs = require('fs')
var cityName = process.argv[2]
console.log(cityName)
const Wetter = async () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=bdc3d82d334a9b16b4d39a3dd2095e84&units=metric`)
    .then(function (response) {
        let cel = response.data.main.temp
            console.log('It is now ',(cel) ,`in ${cityName}`);
            console.log(`The current weather conditions are:${response.data.weather[0].main}`)
    // return response.data;
    })
    .catch(function (error) {
        console.log(error);
    });
};
Wetter()
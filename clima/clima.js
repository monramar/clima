const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7126a262ed27ef492f28d161c1bda5de&units=metric&lang=es`)

    return resp.data.main.temp;
}


module.exports = {
    getClima
}
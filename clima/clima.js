const axios = require('axios');

const getClima = async(lat, long) => {

    const respuesta = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
        params: {
            lat: lat,
            lon: long,
            appid: '6b2b5cf045007f53b6a24b26c71bef94',
            units: 'metric'
        }
    });

    return respuesta.data.main.temp;
};

module.exports = {
    getClima
};
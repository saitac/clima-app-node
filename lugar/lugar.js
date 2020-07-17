const axios = require('axios');

const getLugarLatLong = async(paramCiudad) => {

    const respuesta = await axios.get(`https://geocode.xyz/${paramCiudad}`, {
        params: {
            json: 1,
            auth: '128500788441666218414x6657'
        }
    });

    if (respuesta.data.error) {
        throw new Error(respuesta.data.error.description);
    }

    const data = respuesta.data;
    const ciudad = `${respuesta.data.standard.city}, ${respuesta.data.standard.countryname}`;
    const lat = respuesta.data.latt;
    const lng = respuesta.data.longt;

    return {
        ciudad,
        lat,
        lng
    };

};

module.exports = {
    getLugarLatLong
};
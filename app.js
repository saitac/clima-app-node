const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

/**
 * https://geocode.xyz/
 * https://geocode.xyz/madrid?json=1
 * node app -d "new york"
 * https://openweathermap.org/
 * openweathermap KEY => 6b2b5cf045007f53b6a24b26c71bef94
 */

const getInfo = async(direccion) => {

    try {
        const datosLugar = await lugar.getLugarLatLong(direccion);
        const climaLugar = await clima.getClima(datosLugar.lat, datosLugar.lng);
        return `El clima de ${datosLugar.ciudad} es: ${climaLugar} grados centígados.`;
    } catch (error) {
        return `No se pudo determinar el clima de: ${direccion}.`;
    }

};


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);
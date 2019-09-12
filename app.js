const lugar = require('./lugar/lugar.js')
const clima = require('./clima/clima.js')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//argv.direccion

//lugar.getLugarLatLng(argv.direccion)
//    .then(console.log)


/* clima.getClima(35, 139)
    .then(console.log)
    .catch(console.log) */

const getInfo = async(direccion) => {
    try {
        const coord = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coord.lat, coord.lon);
        return `El clima de ${coord.direccion} es de ${temp}.`;
    } catch (err) {
        return `No se pudo  determinar el clima de ${direccion}.`;
    }

}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)
const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'X-RapidAPI-Key': '62baacaba8msha707f9385b3fe01p1b8e1fjsn86f0b8546f44' }
    });


    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay respuesta para ${dir}`);
        // catch new error1(err);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;


    return {
        direccion,
        lat,
        lon
    }

}

module.exports = {
    getLugarLatLng
}
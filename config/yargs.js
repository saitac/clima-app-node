const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Ciudad para obtener el clima',
            demand: true
        }
    })
    .help()
    .argv;


module.exports = {
    argv
};
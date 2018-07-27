const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
})
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results.address);
    weather.getWeather(results.latitude, results.longitude, (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`It's currently ${results.temperature}. It feels like ${results.apparentTemperature}.`);
      }
    });
  }
});




// 3ae79aeb9ae7e4a04c220acab846674e
// 40.76049, -111.8658015

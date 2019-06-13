

$( document ).ready(function() {
 
var thermostat = new Thermostat();
$('#temperature').text(thermostat._temperature);

function updateTemperature() {
  $('#temperature').text(thermostat._temperature);
  $('#dotty').attr('class', thermostat.current_energy_usage());
}

$('#increase').on('click', function() { // event listener
  thermostat.up(); // update model
  $('#temperature').text(thermostat._temperature); 
  updateTemperature() 
})

$('#decrease').on('click', function() { 
  thermostat.down();
  updateTemperature() 
})

$('#powersave_on').on('click', function() {
  thermostat.powerSave(); 
  $('#powersave_status').text('Powersave mode is ON!'); 
})

$('#powersave_off').on('click', function() { 
  thermostat.powerSave(); 
  thermostat.togglePowerSave(); 
  $('#powersave_status').text('Powersave mode is OFF!'); 
})

$('#reset').on('click', function() { 
  thermostat.reset(); 
  $('#temperature').text(thermostat._temperature);
})

$.get("http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=env('APIKEY')", function(cityWeather) {
  console.log("temp:", cityWeather.main.temp);
  var currentWeather = cityWeather.main.temp;
  $('#today').text(currentWeather);
});

// thermostat.current_energy_usage(); 
// if (thermostat.current_energy_usage() === "low-usage") {
//   $("#dot").css("background-color", "green");
// } else if ("high-usage") {
//   $("#dot").css("background-color", "red");
// };



});


$(document).ready(function () {

  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').click(function () {
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function () {
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').click(function () {
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-on').click(function () {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on');
    updateTemperature();
  });

  $('#powersaving-off').click(function () {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off');
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=939d315b9db3cc19f4768123db86c37f&units=metric', function (data) {
    $('#current-temperature').text(data.main.temp);
  });

});
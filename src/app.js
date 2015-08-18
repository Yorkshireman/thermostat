var thermostat = new Thermostat();
var thermostatTemperature = document.getElementById('current_temperature');

var powerSavingCheckbox = document.getElementById('power_saving_checkbox');

var increaseTemperatureButton = document.getElementById('increase_temperature');
var decreaseTemperatureButton = document.getElementById('decrease_temperature');

increaseTemperatureButton.onclick=function() {
  thermostat.increaseTemperature();
  thermostatTemperature.innerHTML = thermostat.temperature;
};

decreaseTemperatureButton.onclick=function() {
  thermostat.decreaseTemperature();
  thermostatTemperature.innerHTML = thermostat.temperature;
};

powerSavingCheckbox.onclick=function() {
  togglePowerSaving();
};

function togglePowerSaving() {
  if(powerSavingCheckbox.checked) {
    thermostat.turnOnPowerSaving();
  } else {
    thermostat.turnOffPowerSaving();
  }
  thermostatTemperature.innerHTML = thermostat.temperature;
};

thermostatTemperature.innerHTML = thermostat.temperature;
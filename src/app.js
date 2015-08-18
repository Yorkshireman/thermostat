var thermostat = new Thermostat();
var thermostatTemperature = document.getElementById('current_temperature');

thermostatTemperature.innerHTML = thermostat.temperature;

document.getElementById('increase_temperature').onclick=function() {
  thermostat.increaseTemperature();
  thermostatTemperature.innerHTML = thermostat.temperature;
};

document.getElementById('decrease_temperature').onclick=function() {
  thermostat.decreaseTemperature();
  thermostatTemperature.innerHTML = thermostat.temperature;
};

var powerSavingCheckbox = document.getElementById('power_saving_checkbox');

function togglePowerSaving() {
  if(powerSavingCheckbox.checked) {
    thermostat.turnOnPowerSaving();
  } else {
    thermostat.turnOffPowerSaving();
  }
};

powerSavingCheckbox.onclick=function() {
  togglePowerSaving();
};
var thermostat = new Thermostat();
var thermostatTemperature = document.getElementById('current_temperature');

var powerSavingCheckbox = document.getElementById('power_saving_checkbox');

var increaseTemperatureButton = document.getElementById('increase_temperature');
var decreaseTemperatureButton = document.getElementById('decrease_temperature');
var resetTemperatureButton = document.getElementById('reset');

increaseTemperatureButton.onclick=function() {
  thermostat.increaseTemperature();
  thermostatTemperature.innerHTML = thermostat.temperature;
  setColour();
};

decreaseTemperatureButton.onclick=function() {
  thermostat.decreaseTemperature();
  thermostatTemperature.innerHTML = thermostat.temperature;
  setColour();
};

resetTemperatureButton.onclick=function() {
  thermostat.resetTemperature();
  thermostatTemperature.innerHTML = thermostat.temperature;
  setColour();
};

powerSavingCheckbox.onclick=function() {
  togglePowerSaving();
  thermostatTemperature.innerHTML = thermostat.temperature;
};

function togglePowerSaving() {
  if(powerSavingCheckbox.checked) {
    thermostat.turnOnPowerSaving();
  } else {
    thermostat.turnOffPowerSaving();
  }
};

function TempRange() {
  return thermostat.temp_range;
};

function setColour() {
  if(TempRange() === "low") {
    thermostatTemperature.style.backgroundColor = '#3FA8FF';
  } else if(TempRange() === "medium") {
    thermostatTemperature.style.backgroundColor = '#FFF275';
  } else if(TempRange() === "high") {
    thermostatTemperature.style.backgroundColor = '#FF5E1E';
  }
};

thermostatTemperature.innerHTML = thermostat.temperature;
setColour();
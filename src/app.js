var thermostat = new Thermostat();
var thermostatTemperature = document.getElementById('current_temperature');

var powerSavingCheckbox = document.getElementById('power_saving_checkbox');

var increaseTemperatureButton = document.getElementById('increase_temperature');
var decreaseTemperatureButton = document.getElementById('decrease_temperature');
var resetTemperatureButton = document.getElementById('reset');

increaseTemperatureButton.onclick = function() {
  thermostat.increaseTemperature();
  setTemperatureAndColour();
};

decreaseTemperatureButton.onclick = function() {
  thermostat.decreaseTemperature();
  setTemperatureAndColour();
};

resetTemperatureButton.onclick = function() {
  thermostat.resetTemperature();
  setTemperatureAndColour();
};

powerSavingCheckbox.onclick=function() {
  togglePowerSaving();
  displayTemperature();
};

function displayTemperature() {
  thermostatTemperature.innerHTML = thermostat.temperature;
};

function setColour() {
  if(tempRange() === "low") {
    thermostatTemperature.style.backgroundColor = '#3FA8FF';
  } else if(TempRange() === "medium") {
    thermostatTemperature.style.backgroundColor = '#FFF275';
  } else if(TempRange() === "high") {
    thermostatTemperature.style.backgroundColor = '#FF5E1E';
  }
};

function setTemperatureAndColour() {
  displayTemperature();
  setColour();
};

function togglePowerSaving() {
  if(powerSavingCheckbox.checked) {
    thermostat.turnOnPowerSaving();
  } else {
    thermostat.turnOffPowerSaving();
  }
};

function tempRange() {
  return thermostat.tempRange();
};

setTemperatureAndColour();
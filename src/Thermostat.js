var Thermostat = function() {
  const DEFAULT_TEMPERATURE = 20;
  const MINIMUM_TEMPERATURE = 10;
  const MAXIMUM_POWER_SAVING_TEMPERATURE = 25;
  const MAXIMUM_NON_POWER_SAVING_TEMPERATURE = 32;

  this.isPowerSavingOn = null;
  this.turnOnPowerSaving();

  this.defaultTemperature = DEFAULT_TEMPERATURE;
  this.temperature = this.defaultTemperature;
  this.minimumTemperature = MINIMUM_TEMPERATURE;
  this.maximumTemperature = null;
  this.maximumPowerSavingTemperature = MAXIMUM_POWER_SAVING_TEMPERATURE;
  this.maximumNonPowerSavingTemperature = MAXIMUM_NON_POWER_SAVING_TEMPERATURE;
  this.setMaximumTemperature();
  this.temp_range = null;
  this.setTempRange(this.temperature);
};

Thermostat.prototype.turnOnPowerSaving = function() {
  this.isPowerSavingOn = true;
  this.setMaximumTemperature();
  if(this.temperature > this.maximumPowerSavingTemperature) {
    this.setTemperature(this.maximumPowerSavingTemperature);
  }
};

Thermostat.prototype.turnOffPowerSaving = function() {
  this.isPowerSavingOn = false;
  this.setMaximumTemperature();
};

Thermostat.prototype.setMaximumTemperature = function() {
  if(this.isPowerSavingOn === true) {
    this.maximumTemperature = this.maximumPowerSavingTemperature;
  } else {
    this.maximumTemperature = this.maximumNonPowerSavingTemperature;
  }
};

Thermostat.prototype.setTemperature = function(new_temperature) {
  if(new_temperature >= this.minimumTemperature && new_temperature <= this.maximumTemperature) {
    this.temperature = new_temperature
    this.setTempRange(new_temperature)
  }
};

Thermostat.prototype.resetTemperature = function() {
  this.setTemperature(this.defaultTemperature);
};

Thermostat.prototype.setTempRange = function(temperature) {
  if(temperature < 18) {
    this.temp_range = "low";
  } else if(temperature >= 18 && temperature < 25) {
    this.temp_range = "medium";
  } else {
    this.temp_range = "high";
  }
};

Thermostat.prototype.increaseTemperature = function() {
  var requestedTemperature = this.temperature + 1;
  this.setTemperature(requestedTemperature);
};

Thermostat.prototype.decreaseTemperature = function() {
  if(this.temperature != this.minimumTemperature) {
    var requestedTemperature = this.temperature -= 1;
    this.setTemperature(requestedTemperature);
  }
};


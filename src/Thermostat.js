var Thermostat = function() {
  const DEFAULT_TEMPERATURE = 20;

  this.temperature = DEFAULT_TEMPERATURE;
  this.isPowerSavingOn = true;
  this.temp_range = null;
  this.setTempRange(this.temperature);
};

Thermostat.prototype.setTemperature = function(new_temperature) {
  this.temperature = new_temperature
  this.setTempRange(new_temperature)
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
  this.temperature += 1;
};

Thermostat.prototype.decreaseTemperature = function() {
  this.temperature -= 1;
};


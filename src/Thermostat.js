var Thermostat = function() {
  const DEFAULT_TEMPERATURE = 20;
  const MINIMUM_TEMPERATURE = 10;

  this.temperature = DEFAULT_TEMPERATURE;
  this.minimumTemperature = MINIMUM_TEMPERATURE;
  this.isPowerSavingOn = true;
  this.temp_range = null;
  this.setTempRange(this.temperature);
};

Thermostat.prototype.setTemperature = function(new_temperature) {
  if(new_temperature >= this.minimumTemperature) {
    this.temperature = new_temperature
    this.setTempRange(new_temperature)
  }
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
  if(this.temperature != this.minimumTemperature) {
    this.temperature -= 1;
  }
};


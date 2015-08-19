var Thermostat = function() {
  this.minimumTemperature = 10;
  this.maximumPowerSavingTemperature = 25
  this.maximumNonPowerSavingTemperature = 32;
  this.defaultTemperature = 20;
  this.temperature = this.defaultTemperature;
  this.setTemperature(this.defaultTemperature);
  this.turnOnPowerSaving();
};


Thermostat.prototype.maximumTemperature = function(){
  if(this.isPowerSavingOn){
    return this.maximumPowerSavingTemperature;
  }else{
    return this.maximumNonPowerSavingTemperature;
  }
}

Thermostat.prototype.turnOnPowerSaving = function() {
  this.isPowerSavingOn = true;
  if(this.temperature > this.maximumTemperature()) {
    this.setTemperature(this.maximumTemperature());
  }
};

Thermostat.prototype.turnOffPowerSaving = function() {
  this.isPowerSavingOn = false;
};


Thermostat.prototype.setTemperature = function(newTemperature) {
  if(this.isWithinValidRange(newTemperature)) {
    this.temperature = newTemperature;
  }
};

Thermostat.prototype.resetTemperature = function() {
  this.setTemperature(this.defaultTemperature);
};

Thermostat.prototype.tempRange = function(temperature) {
  if(temperature < 18) {
    return "low";
  } else if(temperature < 25) {
    return "medium";
  } else {
    return "high";
  }
};

Thermostat.prototype.increaseTemperature = function() {
  this.setTemperature(this.temperature + 1);
};

Thermostat.prototype.decreaseTemperature = function() {
    this.setTemperature(this.temperature - 1);
};


Thermostat.prototype.isWithinValidRange = function(temperature){
  return (temperature >= this.minimumTemperature && temperature <= this.maximumTemperature())
};



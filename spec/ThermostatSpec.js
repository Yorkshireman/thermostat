describe('Theromstat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('Temperature', function() {
    it('has a default temperature of 20', function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it('can be increased', function() {
      thermostat.setTemperature(18);
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(19);
    });

    it('cannot be increased over maximum', function() {
      thermostat.setTemperature(25);
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(25);
    });

    it('can be decreased', function() {
      thermostat.setTemperature(18);
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(17);
    });

    it('cannot be decreased below minimum', function() {
      thermostat.setTemperature(10);
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(10);
    });

    it('cannot be decreased below 10 when already at 10', function() {
      thermostat.setTemperature(10);
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(10);
    });

    it('cannot be set to below 10', function() {
      thermostat.setTemperature(15);
      thermostat.setTemperature(9);
      expect(thermostat.temperature).toEqual(15);
    });

    it('has a max temperature of 25 when power saving mode is on', function() {
      expect(thermostat.maximumTemperature).toEqual(25);
    });

    it('has a max temperature of 32 when power saving mode is off', function() {
      thermostat.turnOffPowerSaving();
      expect(thermostat.maximumTemperature).toEqual(32);
    });

    it('cannot be set to above maximum temperature with power-saving on', function() {
      thermostat.setTemperature(26);
      expect(thermostat.temperature).toEqual(20);
    });

    it('cannot be set to above maximum temperature with power-saving off', function() {
      thermostat.turnOffPowerSaving;
      thermostat.setTemperature(33);
      expect(thermostat.temperature).toEqual(20);
    });

    it('can be reset to default temperature', function() {
      thermostat.setTemperature(22);
      thermostat.resetTemperature();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('Power Saving mode', function() {
    it('is on by default', function() {
      expect(thermostat.isPowerSavingOn).toBe(true);
    });

    describe('when off and temperature is above 25', function() {
      it('resets temperature to 25 when switched on', function() {
        thermostat.turnOffPowerSaving();
        thermostat.setTemperature(30);
        thermostat.turnOnPowerSaving();
        expect(thermostat.temperature).toEqual(25);
      });
    });
  });

  describe('temp_range', function() {
    it('is green when temperature is below 18', function() {
      thermostat.setTemperature(17);
      expect(thermostat.temp_range).toEqual("low");
    });

    it('is yellow when temperature is 18 or greater and below 25', function() {
      thermostat.setTemperature(19)
      expect(thermostat.temp_range).toEqual("medium");
    });

    it('is red when temperature is anything else', function() {
      thermostat.turnOffPowerSaving();
      thermostat.setTemperature(27)
      expect(thermostat.temp_range).toEqual("high");
    });
  });
});
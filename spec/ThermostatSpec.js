describe('Theromstat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('Temperature', function() {
    it('has a default temperature of 20', function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('Power Saving mode', function() {
    it('is on by default', function() {
      expect(thermostat.isPowerSavingOn).toBe(true);
    });
  });

  describe('Colour', function() {
    it('is green when temperature is below 18', function() {
      thermostat.setTemperature(17);
      expect(thermostat.temp_range).toEqual("low");
    });

    it('is yellow when temperature is 18 or greater and below 25', function() {
      thermostat.setTemperature(19)
      expect(thermostat.temp_range).toEqual("medium");
    });

    it('is red when temperature is anything else', function() {
      thermostat.setTemperature(27)
      expect(thermostat.temp_range).toEqual("high");
    });
  });
});
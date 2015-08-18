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

    it('can be decreased', function() {
      thermostat.setTemperature(18);
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(17);
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
  });

  describe('Power Saving mode', function() {
    it('is on by default', function() {
      expect(thermostat.isPowerSavingOn).toBe(true);
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
      thermostat.setTemperature(27)
      expect(thermostat.temp_range).toEqual("high");
    });
  });
});
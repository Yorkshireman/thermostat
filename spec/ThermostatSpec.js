describe('Theromstat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('Temperature', function() {
    it('has a default temperature of 20', function() {
      expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE);
    });
  });
});
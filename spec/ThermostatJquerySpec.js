describe('Thermostat Javascript/jQuery', function(){
  
  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '..';
    loadFixtures('index.html');
    $.holdReady(false);
  });

  describe('Power Saving Checkbox', function() {
    it('is checked when app is started', function() {
      expect('#power_saving_checkbox').toBeChecked();
    });

    describe('after Power Saving has been switched off and temperature set to above 25', function() {
      it('temperature is reset to 25 when Power Saving is switched back on', function() {
        $('#power_saving_checkbox').click();
        debugger
        var i = 0;
        while (i < 6) {
          $("button#increase_temperature").click();
          i = i + 1;
        }
        $('#power_saving_checkbox').click();

        expect('#current_temperature').toContainText('25');
      });
    });
  });

  describe('Temperature increase button', function() {
    it('increases the temperature when clicked', function() {
      $("button#increase_temperature").click();
      expect('#current_temperature').toContainText('21');
    });
  });

  describe('thermostatSetting function', function() {
    it("is 'medium' when app starts", function() {
      expect(thermostatSetting()).toEqual("medium");
    });
  });
});
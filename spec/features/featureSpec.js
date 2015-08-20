describe('Thermostat Javascript/jQuery', function(){
  
  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '..';
    loadFixtures('index.html');
    $.holdReady(false);
  });

  describe('Temperature', function() {
    it('starts at 20', function() {
      expect('#current_temperature').toContainText('20');
    });

    it("can't go below 10", function() {
      var i = 0;
      while (i < 11) {
        $("button#decrease_temperature").click();
        i = i + 1;
      };
      expect('#current_temperature').toContainText('10');
    });

    it('temperature should be yellow when app starts', function() {
      expect($('#current_temperature').css('background-color')).toEqual('rgb(255, 242, 117)')
    });

    it('shoud be blue if temperature is 17', function() {
      var i = 0;
      while (i < 4) {
        $("button#decrease_temperature").click();
        i = i + 1;
      };
      expect($('#current_temperature').css('background-color')).toEqual('rgb(63, 168, 255)');
    });

    it('should be red if temperature is 25', function() {
      var i = 0;
      while (i < 6) {
        $("button#increase_temperature").click();
        i = i +1;
      };
      expect($('#current_temperature').css('background-color')).toEqual('rgb(255, 94, 30)')
    });
  });

  describe('Power Saving Checkbox', function() {
    it('is checked when app is started', function() {
      expect('#power_saving_checkbox').toBeChecked();
    });

    describe('after Power Saving has been switched off and temperature set to above 25', function() {
      it('temperature is reset to 25 when Power Saving is switched back on', function() {
        $('#power_saving_checkbox').click();
        var i = 0;
        while (i < 6) {
          $("button#increase_temperature").click();
          i = i + 1;
        }
        $('#power_saving_checkbox').click();

        expect('#current_temperature').toContainText('25');
      });
    });

    describe('when checked', function() {
      it('temperature cannot be increased to more than 25', function() {
        var i = 0;
        while (i < 6) {
          $("button#increase_temperature").click();
          i = i + 1;
        }
        expect('#current_temperature').toContainText('25');
      });
    });

    describe('when unchecked', function() {
      it('temperature can be increased past 25', function() {
        $('#power_saving_checkbox').click();
        var i = 0;
        while (i < 6) {
          $("button#increase_temperature").click();
          i = i + 1;
        }
        expect('#current_temperature').toContainText('26');
      });
    });
  });

  describe('Temperature increase button', function() {
    it('increases the temperature when clicked', function() {
      $("button#increase_temperature").click();
      expect('#current_temperature').toContainText('21');
    });
  });

  describe('Temperature decrease button', function() {
    it('decreases the temperature when clicked', function() {
      $("button#decrease_temperature").click();
      expect('#current_temperature').toContainText('19');
    });
  });

  describe('reset button', function() {
    it("temperature will return to 20 degrees if pressed", function() {
      $("button#increase_temperature").click();
      $("button#reset").click();
      expect('#current_temperature').toContainText('20');
    });
  });
});
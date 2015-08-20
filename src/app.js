$(document).ready(function() {

  var thermostat = new Thermostat();

  $('#increase_temperature').click(function() {
    thermostat.increaseTemperature();
    setColourAndTemperature();
  });

  $('#decrease_temperature').click(function() {
    thermostat.decreaseTemperature();
    setColourAndTemperature();
  });

  $('#reset').click(function() {
    thermostat.resetTemperature();
    setColourAndTemperature();
  });

  $('#power_saving_checkbox').click(function() {
    togglePowerSaving();
    setColourAndTemperature();
  });

  $('#weatherbutton').click(function() {
      var city = $('#weatherbox').val();
      var weather = $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + city, function(data) {
        $('#weather_description').css('display', 'block');
        $('#requested_city').html(city);
        $('#weather').html(data.weather[0].description)
      });
  });


  function setColourAndTemperature() {
    $('#current_temperature').html(thermostat.temperature);
    setColour();
  };

  function setColour() {
    if(thermostat.tempRange(thermostat.temperature) === "low") {
      $('#current_temperature').css('background-color', '#3FA8FF')
    }
    if(thermostat.tempRange(thermostat.temperature) === "medium") {
      $('#current_temperature').css('background-color', '#FFF275')
    }
    if(thermostat.tempRange(thermostat.temperature) === "high") {
      $('#current_temperature').css('background-color', '#FF5E1E')
    }
  };

  function togglePowerSaving() {
    if($('#power_saving_checkbox').is(':checked')) {
      thermostat.turnOnPowerSaving();
    } else {
      thermostat.turnOffPowerSaving();
    }
  };

  setColourAndTemperature();

});
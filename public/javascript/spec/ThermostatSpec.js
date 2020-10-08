'use strict';

describe('Thermostat', function () {

  var thermostat;

  beforeEach(function () {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function () {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });


  describe('up', function () {
    it('increase the temperature', function () {
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });
  });

  describe('down', function () {
    it('decreases the temperature', function () {
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });

    it('has a minimum temperature of 10 degrees', function () {
      for (var i = 0; i < 11; i++) {
        thermostat.down()
      }
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });
  });

  describe('powerSaveMode', function () {

    it('checks that powersave mode is on as standard', function () {
      expect(thermostat.isPowerSaveModeOn()).toBe(true);

    });

    it('switches powersave mode off', function () {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSaveModeOn()).toBe(false);
    });

    it('switches powersave mode on', function () {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSaveModeOn()).toBe(false);
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSaveModeOn()).toBe(true);
    });

    it('has a maximum temp of 25 when powersave mode is on', function () {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });

    it('has a maximum temp of 25 when powersave mode is on', function () {
      thermostat.switchPowerSavingModeOff();

      for (var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });

    describe('thermostat reset', function () {
      it('', function () {
        thermostat.reset();
        expect(thermostat.getCurrentTemperature()).toEqual(20);
        expect(thermostat.isPowerSaveModeOn()).toBe(true);
      });
    });

    describe('Energy Usage', function () {
      it('checks for low usage', function () {
        for (var i = 0; i < 5; i++) {
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual("low-usage");
      });

      it('checks for medium usage', function () {
        for (var i = 0; i < 5; i++) {
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual("medium-usage");
      });

      it('checks for high usage', function () {
        thermostat.switchPowerSavingModeOff()
        for (var i = 0; i < 10; i++) {
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual("high-usage");
      });

    });


  });
});

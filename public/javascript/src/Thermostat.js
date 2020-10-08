'use strict';


class Thermostat {
  constructor() {
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.powerSaveMode = true;
    this.MAX_TEMPT_PSM = 25;
    this.MAX_TEMPT_PSM_OFF = 32;
  };
    Thermostat

  }
  getCurrentTemperature() {
    return this.temperature;
  };

  //Turning up temp methods

  up() {
    if (this.isMaximumTemperature()) {
      return;
    };
    this.temperature += 1;
  };

  isMaximumTemperature() {
    if (this.isPowerSaveModeOn() === false) {
      return this.temperature === this.MAX_TEMPT_PSM_OFF;
    };
    return this.temperature === this.MAX_TEMPT_PSM;
  };

  //Turning down temp methods

  down() {
    if (this.isMinimumTemperature()) {
      return;
    };
    this.temperature -= 1;
  };

  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  };


  //PowerSaveMode 
  isPowerSaveModeOn() {
    return this.powerSaveMode === true;
  };

  switchPowerSavingModeOff() {
    this.powerSaveMode = false;
  };

  switchPowerSavingModeOn() {
    this.powerSaveMode = true;
  };

  //Reset thermostat
  reset() {
    this.temperature = 20;
    this.powerSaveMode = true;
  };

  //Energy Useage

  energyUsage() {
    if (this.temperature < 18) {
      return "low-usage";
    };
    if (this.temperature <= 25) {
      return "medium-usage";
    };

    if (this.temperature > 25) {
      return "high-usage";
    };
  };

};
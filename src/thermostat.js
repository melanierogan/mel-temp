function Thermostat() {
  this._temperature = 20;
  this._powerSave = true;
  this._minimum = 10;
  this._maximum = 25;
}

Thermostat.prototype.down = function() {
  (this._temperature - 1 >= this._minimum) ? this._temperature -= 1 : this._temperature = this._minimum;
 }
 
 Thermostat.prototype.up = function() {
  (this._temperature + 1 <= this._maximum) ? this._temperature += 1 : this._temperature = this._maximum;
 }

Thermostat.prototype.powerSave = function() {
  return this._powerSave;
}

Thermostat.prototype.togglePowerSave = function() {
  if (this._powerSave == true) {
    this._powerSave = false;
    this._maximum = 32;
  } else {
    this._powerSave = true;
    this._maximum = 25;
  }
}

Thermostat.prototype.reset = function() {
  this._temperature = 20;
}

Thermostat.prototype.current_energy_usage = function() {
  if (this._temperature < 18) {
    return "low-usage";
  } else if (this._temperature >= 18 && this._temperature < 25) {
    return "medium-usage";
  } else {
    return "high-usage"; 
  }
}


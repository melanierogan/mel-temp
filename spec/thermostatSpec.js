describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("Thermostat set at 20 degrees", function(){
    expect(thermostat._temperature).toEqual(20)
  });

  it("Increase temperature", function(){
    thermostat.increase(5)
    expect(thermostat._temperature).toEqual(25)
  });

  it("Increase temperature", function(){
    thermostat.decrease(5)
    expect(thermostat._temperature).toEqual(15)
  });

  it("won't let the user decrease beyond 10 degrees", function() {
    thermostat.decrease(11)
    expect(thermostat._temperature).toEqual(thermostat._minimum)
  });

  it("won't let the user increase beyond 25 degrees by default", function() {
    thermostat.increase(6)
    expect(thermostat._temperature).toEqual(thermostat._maximum)
  });

  it("is in powersave mode by default", function() {
    expect(thermostat.powerSave()).toEqual(true)
  });

  it("has a max temperature of 32 degrees when power save mode is off", function() {
    thermostat.togglePowerSave()
    thermostat.increase(13)
    expect(thermostat._temperature).toEqual(thermostat._maximum)
  });

  it("Reset temperature to 20", function() {
    thermostat.increase(5)
    thermostat.reset()
    expect(thermostat._temperature).toEqual(20)
  });

  it("Turn Power Save off, then on again", function() {
    thermostat.togglePowerSave()
    thermostat.togglePowerSave()
    expect(thermostat.powerSave()).toEqual(true)
  })

  it("Testing togglePowerSave with maximum", function() {
    thermostat.togglePowerSave()
    thermostat.togglePowerSave()
    thermostat.increase(6)
    expect(thermostat._temperature).toEqual(thermostat._maximum)
  });

  it("Current energy usage - low", function() {
    thermostat.decrease(3)
    expect(thermostat.current_energy_usage()).toEqual("low-usage")
  });

  it("Current energy usage - medium", function() {
    thermostat.increase(4)
    expect(thermostat.current_energy_usage()).toEqual("medium-usage")
  });

  it("Current energy usage - high", function() {
    thermostat.increase(10)
    expect(thermostat.current_energy_usage()).toEqual("high-usage")
  });
  
});
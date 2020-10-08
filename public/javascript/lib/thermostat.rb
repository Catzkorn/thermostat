

class Thermostat
  attr_reader :temperature 

  def initialize
    @temperature = 20
  end

  def self.instance 
    @thermostat ||= self.new
  end

  def self.update(temp)
    @temperature = temp
  end

end
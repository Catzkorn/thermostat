require 'sinatra/base'
require 'json'

class Thermostapp < Sinatra::Base

  get "/" do
  File.read('public/index.html')
  end


  get "/temperature" do
   thermostat =  Thermostat.instance
   {temperature: thermostat.temperature}.to_json
  end

  post "temperature" do
    
  end

  run! if app_file == $0
end


run! if app_file == $0
end



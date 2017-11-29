var tempCelsius
var tempFahrenheit
$(document).ready(function(){
  
  var myLocation = "https://ipinfo.io";
  $.getJSON(myLocation,function(data1){
  
  var end = 0
  var lat = data1.loc;
  var realLat = lat.indexOf(",");
  var realRealLat = lat.substr(0,realLat);
  var longg = lat.substr(realLat + 1, lat.length);
    
  
  
    
  var url = "https://fcc-weather-api.glitch.me/api/current?lat=" + realRealLat + "&lon=" + longg;
  $.getJSON(url, function(data){
  
    var wind = data.wind.speed;
    tempCelsius = data.main.temp;
    tempFahrenheit = (tempCelsius*1.8) + 32;
    tempCelsius = Math.floor(tempCelsius);
    tempFahrenheit = Math.floor(tempFahrenheit);
    var windDirection = data.wind.deg;
    var description = data.weather[0].description;
    var code = data.cod;
   
    
    $("#temperature").html(tempFahrenheit +"° F")
    $("#information").html(description);
    $("#wind").html(wind);
    $("#location").html(data1.loc);
    $("#city").html(data.name);
    $("#code").addClass("owf-" + code);
    
    
  });
 
});  
   $("#celsius").click(function(){
    $("#temperature").html(tempCelsius + "° C");
});
  $("#fahrenheit").click(function(){
    $("#temperature").html(tempFahrenheit + "° F");
});
});
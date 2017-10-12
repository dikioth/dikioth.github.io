var link = "http://api.openweathermap.org/data/2.5/weather?q=haegersten&APPID=d3d3b90fe42115ee92961181b197301c";
//link = "http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1";
var tempC = 0;
var tempF = 0;
function toggleonfoff_init() {
    $("div.input.toggle-onoff input:hidden").parent("div").children("i.fa").removeClass("fa-toggle-on").addClass("fa-toggle-off");
    $("div.input.toggle-onoff input:hidden[value='True']").parent("div").children("i.fa").removeClass("fa-toggle-off").addClass("fa-toggle-on");
    $("#nameDegree").html("°F");


}
$("div.input.toggle-onoff").click(function() {
    var value = $(this).children("input:hidden").val();
    if( value == "True" ) {
    $("#nameDegree").html("°C");
    $("#temperature").html(tempC+ "°C");
        $(this).children("input:hidden").val("False");
        $(this).children("i.fa").removeClass("fa-toggle-on").addClass("fa-toggle-off");
    } else {
        $("#temperature").html(tempF + "°F");
        $(this).children("input:hidden").val("True");
        $(this).children("i.fa").removeClass("fa-toggle-off").addClass("fa-toggle-on");
        $("#nameDegree").html("°F");
    }
});

$(document).ready(function(){
  toggleonfoff_init();
  $.getJSON("http://ip-api.com/json",function(m){
  $(".title").append(" "+m.city); });

  $.getJSON(link, function(w){
    tempC = Math.round(w.main.temp - 273); // Temperature in celsis
    tempF = tempC*1.8+32;
    var weatherNow = w.weather[0].main.toLowerCase();
    var weatherDescription = w.weather[0].description;
    $("#weather-text").html(weatherDescription);
    setWeatherIcon(weatherNow);
    $("#temperature").html(tempF+ "°F");


  });

});

function kelvin2Celsius(num){
  return num - 273;
}

function setWeatherIcon(weather){
  if (weather == "clouds"){
    weather = "cloud"
  }
else if (weather == "drizzle"){
  weather = "showers" ;
}

  var classNow = "wi wi-" + weather;
  $("#weather-icon").attr('class', classNow);
}

window.addEventListener("load", function() {
   
	document.body.style.width='100%';
    document.body.style.height='100%';

	if(blur){
		$('body').css("text-shadow", "2px 2px 6px black");	
	}else{
		$('body').css("text-shadow", "2px 2px black");
	}
   

}, false);

function updateClock() {

	var currentTime = new Date();

	var currentHours = currentTime.getHours();
	var currentMinutes = currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes();
	var currentSeconds = currentTime.getSeconds() < 10 ? '0' + currentTime.getSeconds() : currentTime.getSeconds();
	var currentDate = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();

	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var months=["January","February","March","April","May","June","July","August","September","October","November","December"];

	timeOfDay = ( currentHours < 12 ) ? " am" : " pm";

	if (time == "24h"){
		timeOfDay = "";
		currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
		currentTimeString = currentHours + ":" + currentMinutes;
	}
	if (time == "12h"){
		currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
		currentHours = ( currentHours == 0 ) ? 12 : currentHours;
		currentTimeString = currentHours + ":" + currentMinutes;
	}

	document.getElementById("hour").innerHTML = currentHours;
	document.getElementById("minute").innerHTML = currentMinutes;
	document.getElementById("ampm").innerHTML = timeOfDay;
	document.getElementById("weekday").innerHTML = days[currentTime.getDay()];
	document.getElementById("date").innerHTML = currentDate;
	document.getElementById("month").innerHTML = months[currentTime.getMonth()];
}

function init(){
	updateClock();
	setInterval("updateClock();", 1000);
}

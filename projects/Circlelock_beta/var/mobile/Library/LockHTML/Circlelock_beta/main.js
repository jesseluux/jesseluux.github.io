window.addEventListener("load", function() {
   
   document.body.style.width='100%';
   document.body.style.height='100%';

}, false);

function updateClock() {

	var currentTime = new Date();

	var currentHours = currentTime.getHours();
	var currentMinutes = currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes();
	var currentSeconds = currentTime.getSeconds() < 10 ? '0' + currentTime.getSeconds() : currentTime.getSeconds();
	var currentDate = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
	var currentMonth = (currentTime.getMonth()+1) < 10 ? '0' + (currentTime.getMonth()+1) : (currentTime.getMonth()+1);

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
		document.getElementById("ampm").innerHTML = timeOfDay;
	}

	document.getElementById("hour").innerHTML = currentHours;
	document.getElementById("minute").innerHTML = currentMinutes;
	document.getElementById("day").innerHTML = currentDate;
	document.getElementById("month").innerHTML = currentMonth;
	
	
	spin(currentTime.getSeconds());
}

function spin(s){
	$('#clock').css("transform", "rotate("+s*6+"deg)");
	$('#clock2').css("transform", "rotate(-"+s*6+"deg)");
}

function setCoordinates(){
	var height = document.body.clientHeight;
	var width = document.body.clientWidth;

	

	if(width < 375){
		$('#circle1').css("margin-left", "15%");
		$('#circle6').css("margin-left", "15%");
		$('#circle3').css("margin-right", "15%");
		$('#circle8').css("margin-right", "15%");

		$('#circle4').css("margin-left", "10%");
		$('#circle5').css("margin-right", "10%");

		var n = ((width-(((0.15*width)*2)+120))-60)/2;
		$('#circle7').css("margin-left", ""+n+"px");
		$('#circle2').css("margin-left", ""+n+"px");

	}else if(width > 375){
		$('#circle1').css("margin-left", "23%");
		$('#circle6').css("margin-left", "23%");
		$('#circle3').css("margin-right", "23%");
		$('#circle8').css("margin-right", "23%");

		$('#circle4').css("margin-left", "17%");
		$('#circle5').css("margin-right", "17%");

		var n = ((width-(((0.23*width)*2)+120))-60)/2;
		$('#circle7').css("margin-left", ""+n+"px");
		$('#circle2').css("margin-left", ""+n+"px");

	}else{
		var n = ((width-(((0.20*width)*2)+120))-60)/2;
		$('#circle7').css("margin-left", ""+n+"px");
		$('#circle2').css("margin-left", ""+n+"px");
	}
}

function setCircles(){
	switch (circle1){
		case 'notif_1':
			document.getElementById('circle1').innerHTML = "<p id='nametag'>"+notif_1_name+"</p><p id='notif_1' class='value_nametag'>X</p>";
			break;
		case 'notif_2':
			document.getElementById('circle1').innerHTML = "<p id='nametag'>"+notif_2_name+"</p><p id='notif_2' class='value_nametag'>X</p>";
			break;
		case 'notif_3':
			document.getElementById('circle1').innerHTML = "<p id='nametag'>"+notif_3_name+"</p><p id='notif_3' class='value_nametag'>X</p>";
			break;
		case 'cpu':
			document.getElementById('circle1').innerHTML = '<p id="nametag">CPU</p><p class="value_nametag" id="cpu_value">X</p>';
			break;
		case 'ram':
			document.getElementById('circle1').innerHTML = '<p id="nametag">RAM</p><p class="value_nametag" id="ram_value">X</p>';
			break;
		case 'weather':
			document.getElementById('circle1').innerHTML = '<div id="weather"><span id="temp">X</span></div>';
			break;
		case 'calender':
			document.getElementById('circle1').innerHTML = '<div id="calender"><span id="day"></span><span id="month"></span></div>';
			break;
		case 'battery':
			document.getElementById('circle1').innerHTML = '<div id="battery"><span id="battery_p">X</span></div>';
			break;
		case 'hide':
			$('#circle1').css("visibility", "hidden");
			break;
		default:
			document.getElementById('circle1').innerHTML = "<p id='nametag'>"+notif_1_name+"</p><p id='notif_1' class='value_nametag'>X</p>";
			break;
	}

	switch (circle2){
		case 'notif_1':
			document.getElementById('circle2').innerHTML = "<p id='nametag'>"+notif_1_name+"</p><p id='notif_1' class='value_nametag'>X</p>";
			break;
		case 'notif_2':
			document.getElementById('circle2').innerHTML = "<p id='nametag'>"+notif_2_name+"</p><p id='notif_2' class='value_nametag'>X</p>";
			break;
		case 'notif_3':
			document.getElementById('circle2').innerHTML = "<p id='nametag'>"+notif_3_name+"</p><p id='notif_3' class='value_nametag'>X</p>";
			break;
		case 'cpu':
			document.getElementById('circle2').innerHTML = '<p id="nametag">CPU</p><p class="value_nametag" id="cpu_value">X</p>';
			break;
		case 'ram':
			document.getElementById('circle2').innerHTML = '<p id="nametag">RAM</p><p class="value_nametag" id="ram_value">X</p>';
			break;
		case 'weather':
			document.getElementById('circle2').innerHTML = '<div id="weather"><span id="temp">X</span></div>';
			break;
		case 'calender':
			document.getElementById('circle2').innerHTML = '<div id="calender"><span id="day"></span><span id="month"></span></div>';
			break;
		case 'battery':
			document.getElementById('circle2').innerHTML = '<div id="battery"><span id="battery_p">X</span></div>';
			break;
		case 'hide':
			$('#circle2').css("visibility", "hidden");
			break;
		default:
			document.getElementById('circle2').innerHTML = "<p id='nametag'>"+notif_2_name+"</p><p id='notif_2' class='value_nametag'>X</p>";
			break;
	}

	switch (circle3){
		case 'notif_1':
			document.getElementById('circle3').innerHTML = "<p id='nametag'>"+notif_1_name+"</p><p id='notif_1' class='value_nametag'>X</p>";
			break;
		case 'notif_2':
			document.getElementById('circle3').innerHTML = "<p id='nametag'>"+notif_2_name+"</p><p id='notif_2' class='value_nametag'>X</p>";
			break;
		case 'notif_3':
			document.getElementById('circle3').innerHTML = "<p id='nametag'>"+notif_3_name+"</p><p id='notif_3' class='value_nametag'>X</p>";
			break;
		case 'cpu':
			document.getElementById('circle3').innerHTML = '<p id="nametag">CPU</p><p class="value_nametag" id="cpu_value">X</p>';
			break;
		case 'ram':
			document.getElementById('circle3').innerHTML = '<p id="nametag">RAM</p><p class="value_nametag" id="ram_value">X</p>';
			break;
		case 'weather':
			document.getElementById('circle3').innerHTML = '<div id="weather"><span id="temp">X</span></div>';
			break;
		case 'calender':
			document.getElementById('circle3').innerHTML = '<div id="calender"><span id="day"></span><span id="month"></span></div>';
			break;
		case 'battery':
			document.getElementById('circle3').innerHTML = '<div id="battery"><span id="battery_p">X</span></div>';
			break;
		case 'hide':
			$('#circle3').css("visibility", "hidden");
			break;
		default:
			document.getElementById('circle3').innerHTML = "<p id='nametag'>"+notif_3_name+"</p><p id='notif_3' class='value_nametag'>X</p>";
			break;

	}

	switch (circle4){
		case 'notif_1':
			document.getElementById('circle4').innerHTML = "<p id='nametag'>"+notif_1_name+"</p><p id='notif_1' class='value_nametag'>X</p>";
			break;
		case 'notif_2':
			document.getElementById('circle4').innerHTML = "<p id='nametag'>"+notif_2_name+"</p><p id='notif_2' class='value_nametag'>X</p>";
			break;
		case 'notif_3':
			document.getElementById('circle4').innerHTML = "<p id='nametag'>"+notif_3_name+"</p><p id='notif_3' class='value_nametag'>X</p>";
			break;
		case 'cpu':
			document.getElementById('circle4').innerHTML = '<p id="nametag">CPU</p><p class="value_nametag" id="cpu_value">X</p>';
			break;
		case 'ram':
			document.getElementById('circle4').innerHTML = '<p id="nametag">RAM</p><p class="value_nametag" id="ram_value">X</p>';
			break;
		case 'weather':
			document.getElementById('circle4').innerHTML = '<div id="weather"><span id="temp">X</span></div>';
			break;
		case 'calender':
			document.getElementById('circle4').innerHTML = '<div id="calender"><span id="day"></span><span id="month"></span></div>';
			break;
		case 'battery':
			document.getElementById('circle4').innerHTML = '<div id="battery"><span id="battery_p">X</span></div>';
			break;
		case 'hide':
			$('#circle4').css("visibility", "hidden");
			break;
		default:
			document.getElementById('circle4').innerHTML = '<p id="nametag">CPU</p><p class="value_nametag" id="cpu_value">X</p>';
			break;
	}

	switch (circle5){
		case 'notif_1':
			document.getElementById('circle5').innerHTML = "<p id='nametag'>"+notif_1_name+"</p><p id='notif_1' class='value_nametag'>X</p>";
			break;
		case 'notif_2':
			document.getElementById('circle5').innerHTML = "<p id='nametag'>"+notif_2_name+"</p><p id='notif_2' class='value_nametag'>X</p>";
			break;
		case 'notif_3':
			document.getElementById('circle5').innerHTML = "<p id='nametag'>"+notif_3_name+"</p><p id='notif_3' class='value_nametag'>X</p>";
			break;
		case 'cpu':
			document.getElementById('circle5').innerHTML = '<p id="nametag">CPU</p><p class="value_nametag" id="cpu_value">X</p>';
			break;
		case 'ram':
			document.getElementById('circle5').innerHTML = '<p id="nametag">RAM</p><p class="value_nametag" id="ram_value">X</p>';
			break;
		case 'weather':
			document.getElementById('circle5').innerHTML = '<div id="weather"><span id="temp">X</span></div>';
			break;
		case 'calender':
			document.getElementById('circle5').innerHTML = '<div id="calender"><span id="day"></span><span id="month"></span></div>';
			break;
		case 'battery':
			document.getElementById('circle5').innerHTML = '<div id="battery"><span id="battery_p">X</span></div>';
			break;
		case 'hide':
			$('#circle5').css("visibility", "hidden");
			break;
		default:
			document.getElementById('circle5').innerHTML = '<p id="nametag">RAM</p><p class="value_nametag" id="ram_value">X</p>';
			break;
	}

	switch (circle6){
		case 'notif_1':
			document.getElementById('circle6').innerHTML = "<p id='nametag'>"+notif_1_name+"</p><p id='notif_1' class='value_nametag'>X</p>";
			break;
		case 'notif_2':
			document.getElementById('circle6').innerHTML = "<p id='nametag'>"+notif_2_name+"</p><p id='notif_2' class='value_nametag'>X</p>";
			break;
		case 'notif_3':
			document.getElementById('circle6').innerHTML = "<p id='nametag'>"+notif_3_name+"</p><p id='notif_3' class='value_nametag'>X</p>";
			break;
		case 'cpu':
			document.getElementById('circle6').innerHTML = '<p id="nametag">CPU</p><p class="value_nametag" id="cpu_value">X</p>';
			break;
		case 'ram':
			document.getElementById('circle6').innerHTML = '<p id="nametag">RAM</p><p class="value_nametag" id="ram_value">X</p>';
			break;
		case 'weather':
			document.getElementById('circle6').innerHTML = '<div id="weather"><span id="temp">X</span></div>';
			break;
		case 'calender':
			document.getElementById('circle6').innerHTML = '<div id="calender"><span id="day"></span><span id="month"></span></div>';
			break;
		case 'battery':
			document.getElementById('circle6').innerHTML = '<div id="battery"><span id="battery_p">X</span></div>';
			break;
		case 'hide':
			$('#circle6').css("visibility", "hidden");
			break;
		default:
			document.getElementById('circle6').innerHTML = '<div id="weather"><span id="temp">X</span></div>';
			break;
	}

	switch (circle7){
		case 'notif_1':
			document.getElementById('circle7').innerHTML = "<p id='nametag'>"+notif_1_name+"</p><p id='notif_1' class='value_nametag'>X</p>";
			break;
		case 'notif_2':
			document.getElementById('circle7').innerHTML = "<p id='nametag'>"+notif_2_name+"</p><p id='notif_2' class='value_nametag'>X</p>";
			break;
		case 'notif_3':
			document.getElementById('circle7').innerHTML = "<p id='nametag'>"+notif_3_name+"</p><p id='notif_3' class='value_nametag'>X</p>";
			break;
		case 'cpu':
			document.getElementById('circle7').innerHTML = '<p id="nametag">CPU</p><p class="value_nametag" id="cpu_value">X</p>';
			break;
		case 'ram':
			document.getElementById('circle7').innerHTML = '<p id="nametag">RAM</p><p class="value_nametag" id="ram_value">X</p>';
			break;
		case 'weather':
			document.getElementById('circle7').innerHTML = '<div id="weather"><span id="temp">X</span></div>';
			break;
		case 'calender':
			document.getElementById('circle7').innerHTML = '<div id="calender"><span id="day"></span><span id="month"></span></div>';
			break;
		case 'battery':
			document.getElementById('circle7').innerHTML = '<div id="battery"><span id="battery_p">X</span></div>';
			break;
		case 'hide':
			$('#circle7').css("visibility", "hidden");
			break;
		default:
			document.getElementById('circle7').innerHTML = '<div id="calender"><span id="day"></span><span id="month"></span></div>';
			break;
	}

	switch (circle8){
		case 'notif_1':
			document.getElementById('circle8').innerHTML = "<p id='nametag'>"+notif_1_name+"</p><p id='notif_1' class='value_nametag'>X</p>";
			break;
		case 'notif_2':
			document.getElementById('circle8').innerHTML = "<p id='nametag'>"+notif_2_name+"</p><p id='notif_2' class='value_nametag'>X</p>";
			break;
		case 'notif_3':
			document.getElementById('circle8').innerHTML = "<p id='nametag'>"+notif_3_name+"</p><p id='notif_3' class='value_nametag'>X</p>";
			break;
		case 'cpu':
			document.getElementById('circle8').innerHTML = '<p id="nametag">CPU</p><p class="value_nametag" id="cpu_value">X</p>';
			break;
		case 'ram':
			document.getElementById('circle8').innerHTML = '<p id="nametag">RAM</p><p class="value_nametag" id="ram_value">X</p>';
			break;
		case 'weather':
			document.getElementById('circle8').innerHTML = '<div id="weather"><span id="temp">X</span></div>';
			break;
		case 'calender':
			document.getElementById('circle8').innerHTML = '<div id="calender"><span id="day"></span><span id="month"></span></div>';
			break;
		case 'battery':
			document.getElementById('circle8').innerHTML = '<div id="battery"><span id="battery_p">X</span></div>';
			break;
		case 'hide':
			$('#circle8').css("visibility", "hidden");
			break;
		default:
			document.getElementById('circle8').innerHTML = '<div id="battery"><span id="battery_p">X</span></div>';
			break;
	}
}

function setOpacity(){
	$('body').css("opacity", opacity);
}

function init(){
	setCoordinates();
	setCircles();
	setOpacity();
	updateClock();
	setInterval("updateClock();", 1000);
}


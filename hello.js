$(document).ready(function() {
    $.ajax({
        url: "https://api.darksky.net/forecast/2ba7132f09fc2069522d9a980d4b741b/42.4851,-71.4328",
        //data: myData,
    	type: 'GET',
    	crossDomain: true,
	    dataType: 'jsonp'
	    
    }).then(function(data) {
       //$('.current-weather').append(data.currently.summary);
       
       $(".current-weather h1").html("Weather");
       $("#current-weather").html(data.currently.summary + " - " + Math.round(data.currently.temperature) + "&#8457;");
       $(".current-weather h2").html(data.currently.summary);
       
       $('.current-temp h2').append(Math.round(data.currently.temperature));
       $('.current-humidity h2').append(data.currently.humidity*100 + "%");
       $('#current-humidity').append(data.currently.humidity*100 + "%");
       
       //$('.greeting-content').append(data.content);
    });
    
    
    $.ajax({
        url: "https://api.particle.io/v1/devices/26001c001247353136383631/air?access_token=e5ad56d7b6af5befcbf3992275e508b1c2911996",
        //data: myData,
    	type: 'GET',
    	crossDomain: true,
	    dataType: 'json'
	    
    }).then(function(data) {
       $('.greenhouse-temp h2').append(Math.round(data.result));
       $('#greenhouse-temp').append(Math.round(data.result) + "&#8457;");
       console.log(data);
       //$('.greeting-content').append(data.content);
    });
    
    $.ajax({
        url: "https://api.particle.io/v1/devices/26001c001247353136383631/humidity?access_token=e5ad56d7b6af5befcbf3992275e508b1c2911996",
        //data: myData,
    	type: 'GET',
    	crossDomain: true,
	    dataType: 'json'
	    
    }).then(function(data) {
		$('.greenhouse-humidity h2').append(Math.round(data.result) + "%");
		$("#greenhouse-humidity").append(Math.round(data.result) + "%");
		$('.connected h2').append(data.coreInfo.connected);
		
		var updated = new Date(data.coreInfo.last_heard);
		
		$('#last-update').append(updated.toLocaleString());
       
       console.log(data);
       //$('.greeting-content').append(data.content);
    });
    
    $.ajax({
        url: "https://api.particle.io/v1/devices/26001c001247353136383631/soil?access_token=e5ad56d7b6af5befcbf3992275e508b1c2911996",
        //data: myData,
    	type: 'GET',
    	crossDomain: true,
	    dataType: 'json'
	    
    }).then(function(data) {
		$('.greenhouse-soil h2').append(Math.round(data.result));
		$('#soil-temp').append(Math.round(data.result) + "&#8457;");
       
       console.log(data);
       //$('.greeting-content').append(data.content);
    });
    
});
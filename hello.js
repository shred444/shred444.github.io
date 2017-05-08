$(document).ready(function() {
    $.ajax({
        url: "https://api.darksky.net/forecast/2ba7132f09fc2069522d9a980d4b741b/42.4851,-71.4328",
        //data: myData,
    	type: 'GET',
    	crossDomain: true,
	    dataType: 'jsonp'
	    
    }).then(function(data) {
       $('.current-weather').append(data.currently.summary);
       //$('.greeting-content').append(data.content);
    });
    
    
    $.ajax({
        url: "https://api.particle.io/v1/devices/26001c001247353136383631/air?access_token=e5ad56d7b6af5befcbf3992275e508b1c2911996",
        //data: myData,
    	type: 'GET',
    	crossDomain: true,
	    dataType: 'jsonp'
	    
    }).then(function(data) {
       $('.greenhouse-temp').append(data.result);
       //$('.greeting-content').append(data.content);
    });
    
});
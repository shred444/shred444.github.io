$(document).ready(function() {
    $.ajax({
        url: "https://api.darksky.net/forecast/2ba7132f09fc2069522d9a980d4b741b/42.4851,-71.4328"
    }).then(function(data) {
       $('.greeting-id').append(data.currently.summary);
       $('.greeting-content').append(data.content);
    });
});
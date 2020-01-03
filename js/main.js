// Student: Ryan Raishart
// Course: CPT 206 
// Due Date: 4/21/2018 
// raishartr@my.westmoreland.edu

$(document).ready(function(){

    var getURL = function(word){  // appends URL with search term
        var url = "https://pokeapi.co/api/v2/pokemon/" + word + '/';
        return url;
    };

    var getJSON = function(url){
        var xhReq = new XMLHttpRequest(); // new request
        xhReq.open("GET", url, false);
        xhReq.send(null);
        var jsonObject = JSON.parse(xhReq.responseText); // store response
        return jsonObject;
    };

    var injectDOM = function(jsonData){ // displays pokemon name and 2 abilities
        $("#results").html(jsonData['forms'][0]['name'].toUpperCase() +
        '<br>' + jsonData['abilities'][0]['ability']['name'] +
        " and " + jsonData['abilities'][1]['ability']['name']);
    }

    $("#search").on("click", function(){
        console.log("clicked");
        var keyword = $("#searchBar").val().toLowerCase(); // get user search term
        console.log(keyword);
        var url = getURL(keyword); // combine search term with base URL
        var jsonData = getJSON(url); // convert response to JSON
        injectDOM(jsonData); // display data
    });
});

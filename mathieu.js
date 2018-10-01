var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
    var anHttpRequest = new XMLHttpRequest();
    anHttpRequest.onreadystatechange = function() { 
    if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
    aCallback(anHttpRequest.responseText);
    }
    anHttpRequest.open( "GET", aUrl, true ); 
    anHttpRequest.send( null ); 
    }
    }
    var theurl='https://api.github.com/users/mathieurandri/starred';
    var client = new HttpClient();
    client.get(theurl, function(response) { 
    var response1 = JSON.parse(response);
    console.log(response1);
    
    // alert(response);
    document.getElementById("statusCode").innerHTML = response1[0].id;
    document.getElementById("statusMessage").innerHTML = response1[0].name;
    
    }); 
    




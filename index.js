var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }
        console.log("About to make get request")
        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}

function makeRequest() {
    var user = document.getElementById('user_name').value;
    var pwd = document.getElementById('password').value;
    console.log(user + pwd);
    var client = new HttpClient();
    client.get('http://localhost:7800/signin', function(response) {
        console.log(response)
        document.getElementById('bd').innerHTML = response
        console.log("Updated")
    });
}
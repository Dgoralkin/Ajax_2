/// JavaScript File

function show_info(value) {
    console.log(value);
    
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById('demo').innerHTML = this.responseText;
    }
    xhttp.open("GET", "Dany.html");
    xhttp.send();

    return;
}
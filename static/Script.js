/// JavaScript File

function show_info(value) {
    console.log(value);

    if(value == ""){
        return;
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        document.getElementById('demo').innerHTML = xhttp.responseText;
    };
    xhttp.open("GET", value + '.html', true);
    xhttp.send();

    
}
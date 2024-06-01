function zapiszPare() {
    var kod = document.getElementById("kod").value;
    var nazwa = document.getElementById("nazwa").value;
    
    sessionStorage.setItem(kod, nazwa);
}

function pokazWszystkiePary() {
    var output = "";
    
    for (var i = 0; i < sessionStorage.length; i++) {
        var kod = sessionStorage.key(i);
        var nazwa = sessionStorage.getItem(kod);
        
        output += '<div style="background-color: #' + kod + '">' + nazwa + ", kod koloru: " + kod + '</div><br>';
    }
    
    document.getElementById("pary").innerHTML = output;
}

function usunDane() {
    sessionStorage.clear();
    document.getElementById("pary").innerHTML = "";
}
function zapiszPare() {
    var kod = document.getElementById("kod").value;
    var nazwa = document.getElementById("nazwa").value;
    
    localStorage.setItem(kod, nazwa);
}

function pokazWszystkiePary() {
    var output = "";
    
    for (var i = 0; i < localStorage.length; i++) {
        var kod = localStorage.key(i);
        var nazwa = localStorage.getItem(kod);
        
        output += '<div style="background-color: #' + kod + '">' + nazwa + ", kod koloru: " + kod + '</div><br>';
    }
    
    document.getElementById("pary").innerHTML = output;
}

function usunDane() {
    localStorage.clear();
    document.getElementById("pary").innerHTML = "";
}
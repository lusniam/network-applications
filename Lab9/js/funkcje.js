function oblicz_rate(){
    var k = parseFloat(document.getElementById('kwota').value);
    var n = parseInt(document.getElementById('ilosc').value);
    var pr = parseFloat(document.getElementById('procent').value);
    var pr_mc = (pr*0.01) / 12;
    var rata_mc = (k*pr_mc)/(1-(1/(Math.pow((1 + pr_mc),n))));
    var kwota = rata_mc * n;

    if(!isFinite(kwota)) {
        alert('Jest wpisana niepoprawna wartość!!!');
    }
    
    else {
      document.getElementById('rata').value = rata_mc.toFixed(2);
      document.getElementById('odsetki').value = kwota.toFixed(2);
    }
}
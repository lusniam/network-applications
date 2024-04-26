function oblicz(){
    var a = parseFloat(document.getElementById("liczba1").value);
    if(isNaN(a)){
        alert("Podaj liczbę!");
        return;
    }
    var b = parseFloat(document.getElementById("liczba2").value);
    if(isNaN(b)){
        alert("Podaj liczbę!");
        return;
    }
    var tab = document.getElementsByName("operator");
    var operacja;
    for(var i = 0; i < tab.length; i++){
        if(tab[i].checked){
            operacja = tab[i].value;
            break;
        }
    }
    var wynik = 0;
    switch(operacja){
        case "+":
            wynik = a + b;
            break;
        case "-":
            wynik = a - b;
            break;
        case "*":
            wynik = a * b;
            break;
        case "/":
            if(b != 0){
                wynik = a / b;
            }
            else {
                wynik = "Nie dziel przez 0!";
            }
            break;
        default:
            wynik = "Nie wybrano operacji!";
    }
    document.getElementById("wynik").value = wynik;
}
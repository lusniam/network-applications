function sprawdzPole(pole_id,obiektRegex){
    //Funkcja sprawdza czy wartość wprowadzona do pola tekstowego
    //pasuje do wzorca zdefiniowanego za pomocą wyrażenia regularnego
    //Parametry funkcji:
    //pole_id - id sprawdzanego pola tekstowego
    //obiektRegex - wyrażenie regularne
    //--------------------------------- 
    var obiektPole = document.getElementById(pole_id);
    if(!obiektRegex.test(obiektPole.value)) return (false);
    else return (true)
} 

function sprawdz_radio(nazwa_radio){
    //Funkcja sprawdza czy wybrano przycisk radio
    //z grupy przycisków o nazwie nazwa_radio
    //--------------------------------------- 
    var obiekt=document.getElementsByName(nazwa_radio);
    for (i=0;i<obiekt.length;i++){
        wybrany=obiekt[i].checked;
        if (wybrany)
            return true;
    }
    return false;
}

function sprawdz_box(box_id){
    //Funkcja sprawdza czy przycisk typu checkbox
    //o identyfikatorze box_id jest zaznaczony
    //---------------------------------------- 
    var obiekt=document.getElementById(box_id);
    return obiekt.checked;
}

function sprawdz(){
    //Funkcja realizujaca sprawdzanie całego fomularza 
    //wykorzystując funkcje pomocnicze //-------------------------------- 
    var ok=true; //zmienna informująca o poprawnym wypełnieniu formularza 
    //Definicje odpowiednich wyrażeń regularnych dla sprawdzenia
    //poprawności danych wprowadzonych do pól tekstowych 
    obiektNazw = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+(-[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+)?$/;
    //wyrażenie regularne dla nazwiska
    obiektemail = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
    obiektWiek=/^[1-9][0-9]{1,2}$/;
    //Sprawdzanie kolejnych pól formularza. 
    //w przypadku błędu - pojawia się odpowiedni komunikat
    if (!sprawdzPole("surname",obiektNazw)){
        ok=false;
        document.getElementById("nazw_error").innerHTML = "Wpisz poprawnie nazwisko!"
    } else document.getElementById("nazw_error").innerHTML="";
    //Uzupełnij – sprawdz kolejne pola formularza // if ... 
    if (!sprawdzPole("email",obiektemail)){
        ok=false;
        document.getElementById("email_error").innerHTML = "Wpisz poprawnie adres e-mail!"
    } else document.getElementById("email_error").innerHTML="";
    if (!sprawdzPole("age",obiektWiek)){
        ok=false;
        document.getElementById("wiek_error").innerHTML = "Wpisz poprawnie wiek!"
    } else document.getElementById("wiek_error").innerHTML="";
    if (!sprawdz_box("PHP") &&
        !sprawdz_box("C") &&
        !sprawdz_box("Java") &&
        !sprawdz_box("Python")){
            ok=false;
            document.getElementById("produkt_error").innerHTML = "Wybierz język programowania!"
    } else document.getElementById("produkt_error").innerHTML="";
    if (!sprawdz_radio("payment")){
        ok=false;
        document.getElementById("payment_error").innerHTML = "Wybierz formę płatności!"
    } else document.getElementById("payment_error").innerHTML="";
    if (ok){
        dane="Dane z formularza: \n";
        dane+="Nazwisko: "+document.getElementById("surname").value+"\n";
        dane+="Wiek: "+document.getElementById("age").value+"\n";
        dane+="Kraj: "+document.getElementById("country").value+"\n";
        dane+="Email: "+document.getElementById("email").value+"\n";
        dane+="Języki programowania: ";
        if (document.getElementById("PHP").checked) dane+="PHP ";
        if (document.getElementById("C").checked) dane+="C ";
        if (document.getElementById("Java").checked) dane+="Java ";
        if (document.getElementById("Python").checked) dane+="Python ";
        dane+="\n";
        dane+="Forma płatności: ";
        if (document.getElementById("EC").checked) dane+="eurocard ";
        if (document.getElementById("V").checked) dane+="visa ";
        if (document.getElementById("PB").checked) dane+="przelew bankowy ";
        return confirm(dane);
    }
    else return false;
}
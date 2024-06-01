function zapiszProdukt() {
    var nazwa = document.getElementById("nazwa").value;
    var cena = document.getElementById("cena").value;
    var kolor = document.getElementById("kolor").value;
    var liczbaSztuk = document.getElementById("liczbaSztuk").value;

    var item = {
        nazwa: nazwa,
        cena: cena,
        kolor: kolor,
        liczbaSztuk: liczbaSztuk
    };

    document.getElementById("nazwa").value = "";
    document.getElementById("cena").value = "";
    document.getElementById("kolor").value = "";
    document.getElementById("liczbaSztuk").value = "";

    var existingItems = JSON.parse(localStorage.getItem('items')) || [];
    console.log(existingItems);
    existingItems.push(item);
    localStorage.setItem('items', JSON.stringify(existingItems));
}

function wyswietlKoszyk() {
    document.getElementById('wyszukaj').value = "";
    var items = JSON.parse(localStorage.getItem('items')) || [];
    if (items && items.length > 0) {
        var output = "<table border='1'>";
        output += "<tr><th>Nazwa</th><th>Cena</th><th>Kolor</th><th>Liczba sztuk</th><th>Akcje</th></tr>";

        for (var i = 0; i < items.length; i++) {
            output += "<tr>";
            output += "<td>" + items[i].nazwa + "</td>";
            output += "<td>" + items[i].cena + "</td>";
            output += "<td>" + items[i].kolor + "</td>";
            output += "<td>" + items[i].liczbaSztuk + "</td>";
            output += "<td><button onclick='usunProdukt(" + i + ")'>Usuń</button></td>";
            output += "</tr>";
        }
        output += "</table>";
        document.getElementById('koszyk').innerHTML = output;
    } else {
        document.getElementById('koszyk').innerHTML = "Brak produktów o podanej nazwie w koszyku.";
    }
}

function usunProdukt(index) {
    var items = JSON.parse(localStorage.getItem('items'));

    if (items && items.length > index) {
        items.splice(index, 1);
        localStorage.setItem('items', JSON.stringify(items));
        if (document.getElementById("wyszukaj").value === "") {
            wyswietlKoszyk();
        }
        else {
            wyszukajProdukt();
        }
    }
}

function usunWszystkieProdukty() {
    localStorage.removeItem('items');
    wyswietlKoszyk();
}

function wyszukajProdukt() {
    var szukanyProdukt = document.getElementById("wyszukaj").value;
    var items = JSON.parse(localStorage.getItem('items'));

    if (items && items.length > 0) {
        var wyniki = items.filter(function (item) {
            return item.nazwa===szukanyProdukt;
        });

        var output = "<table border='1'>";
        output += "<tr><th>Nazwa</th><th>Cena</th><th>Kolor</th><th>Liczba sztuk</th><th>Akcje</th></tr>";

        for (var i = 0; i < wyniki.length; i++) {
            output += "<tr>";
            output += "<td>" + wyniki[i].nazwa + "</td>";
            output += "<td>" + wyniki[i].cena + "</td>";
            output += "<td>" + wyniki[i].kolor + "</td>";
            output += "<td>" + wyniki[i].liczbaSztuk + "</td>";
            output += "<td><button onclick='usunProdukt(" + i + ")'>Usuń</button></td>";
            output += "</tr>";
        }
        output += "</table>";
        document.getElementById('koszyk').innerHTML = output;
    } else {
        document.getElementById('koszyk').innerHTML = "Brak produktów w koszyku.";
    }
}
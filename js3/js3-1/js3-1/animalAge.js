let uitvoerVeld = document.getElementById("uitvoerVeld");
let img = document.getElementById("resultaatImg");



function myfuntion(dier) {
    if (dier == 'hond') {
        let input = document.getElementById("mijnLeeftijd").value
        let age = 5.5
        if (age == input) {
            img.src = "images/ok.gif"
            uitvoerVeld.innerHTML = "dit klopt helemaal."
        }

        else if (age < input) {
            img.src = "images/arrow-down.gif"
            uitvoerVeld.innerHTML = "Dit klopt niet het goede antwoord is lager."
        }

        else {
            img.src = "images/arrow-up.gif"
            uitvoerVeld.innerHTML = "Dit klopt niet het goede antwoord is hoger"
        }

    }

    else if (dier == 'gecko') {
        let input = document.getElementById("mijnLeeftijd").value
        let age = 11
        if (age == input) {
            img.src = "images/ok.gif"
            uitvoerVeld.innerHTML = "dit klopt helemaal."
        }

        else if (age < input) {
            img.src = "images/arrow-down.gif"
            uitvoerVeld.innerHTML = "Dit klopt niet het goede antwoord is lager."
        }

        else {
            img.src = "images/arrow-up.gif"
            uitvoerVeld.innerHTML = "Dit klopt niet het goede antwoord is hoger"
        }

    }
    else if (dier == 'olifant') {
        let input = document.getElementById("mijnLeeftijd").value
        let age = 1.6
        if (age == input) {
            img.src = "images/ok.gif"
            uitvoerVeld.innerHTML = "dit klopt helemaal."
        }

        else if (age < input) {
            img.src = "images/arrow-down.gif"
            uitvoerVeld.innerHTML = "Dit klopt niet het goede antwoord is lager."
        }

        else {
            img.src = "images/arrow-up.gif"
            uitvoerVeld.innerHTML = "Dit klopt niet het goede antwoord is hoger"
        }

    }
    else if (dier == 'vlieg') {
        let input = document.getElementById("mijnLeeftijd").value
        let age = 1216
        if (age == input) {
            img.src = "images/ok.gif"
            uitvoerVeld.innerHTML = "dit klopt helemaal."
        }

        else if (age < input) {
            img.src = "images/arrow-down.gif"
            uitvoerVeld.innerHTML = "Dit klopt niet het goede antwoord is lager."
        }

        else {
            img.src = "images/arrow-up.gif"
            uitvoerVeld.innerHTML = "Dit klopt niet het goede antwoord is hoger"
        }

    }


}



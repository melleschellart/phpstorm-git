let appel = document.getElementById("totaal_appel");
let peer = document.getElementById("totaal_peer");
let banaan = document.getElementById("totaal_banaan");
let tappel = document.getElementById("totaalPrijs_appel");
let tpeer = document.getElementById("totaalPrijs_peer");
let tbanaan = document.getElementById("totaalPrijs_banaan");
let totaal = document.getElementById("totaalPrijs");

function koopProduct(product, prijs) {
    if (product == "appel") {
        appel.value ++
        tappel.value = appel.value
    }
    else if (product == "peer") {
        peer.value ++
        tpeer.value = peer.value * 2
    }
    else if (product == "banaan") {
        banaan.value ++
        tbanaan.value = banaan.value * 3
    }
}

function verwijderProduct(product, prijs) {
    if (product == "appel") {
        appel.value --
        tappel.value = appel.value
    }
    else if (product == "peer") {
        peer.value --
        tpeer.value = peer.value * 2
    }
    else if (product == "banaan") {
        banaan.value --
        tbanaan.value = banaan.value * 3
    }
}


function berekenPrijs() {
    totaalPrijs.value = parseFloat(tappel.value) + parseFloat(tpeer.value) + parseFloat(tbanaan.value)
}

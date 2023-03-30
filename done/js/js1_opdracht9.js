let prijs = document.getElementById("prijs")
let aantal = document.getElementById("num")
let output = document.getElementById("totaaloutput") 

function Myfunction(){
    let totaal = (prijs.value * aantal.value).toFixed(2)

    if (prijs.value == ""){
        output.innerHTML = `prijs is niet ingevoerd`
    } else if (aantal.value == ""){
        output.innerHTML = `aantal is niet ingevoerd`
    } else if (isNaN(prijs.value)){
        output.innerHTML = `prijs is niet een nummer`
    } else if (isNaN(aantal.value)){
        output.innerHTML = `aantal is niet een nummer`
    } else if (!(prijs.value > 0)){
        output.innerHTML = `prijs is kleiner of gelijk aan 0`
    } else if (!(aantal.value > 0)){
        output.innerHTML = `aantal is kleiner of gelijk aan 0`
    } else{
        output.innerHTML = `totaal: ${totaal}`
    }

    

    
}


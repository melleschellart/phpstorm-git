function Myfunction(){
let een = document.getElementById(1)
let twee = document.getElementById(2)
let drie = document.getElementById(3)
let vier = document.getElementById(4)
let vijf = document.getElementById(5)
let zes = document.getElementById(6)
let zeven = document.getElementById(7)
let acht = document.getElementById(8)
let negen = document.getElementById(9)
let tien = document.getElementById(10)
let elf = document.getElementById(11)
let twaalf = document.getElementById(12)
let totaal = 0
let naam = document.getElementById("naam").value
let leeftijd = document.getElementById("leeftijd").value


if(naam == ""){
    alert("naam is niet ingevoert")
    exit
} else if(leeftijd == ""){
    alert("leeftijd is niet ingevoerd")
    exit
} if(een.checked){
    totaal ++
} if(twee.checked){
    totaal ++
} if(drie.checked){
    totaal ++
} if(vier.checked){
    totaal ++
} if(vijf.checked){
    totaal ++
} if(zes.checked){
    totaal ++
} if(zeven.checked){
    totaal ++
} if(acht.checked){
    totaal ++
} if(negen.checked){
    totaal ++
} if(tien.checked){
    totaal ++
} if(elf.checked){
    totaal ++
} if(twaalf.checked){
    totaal ++
} if(leeftijd < 18 && totaal >= 3){
    alert(naam + "het is verstandig om u te laten checken er is een kans dat u het corona virus heeft.")
} else if( leeftijd >= 18 && totaal >= 2){
    alert(naam + "het is verstandig om u te laten checken er is een kans dat u het corona virus heeft.")
} else{
    alert(naam + "je hebt het corona virus niet.")
}


}



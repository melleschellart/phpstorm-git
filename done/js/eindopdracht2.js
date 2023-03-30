
function Myfunction(){
let eerste = document.getElementById(1).value
let tweede = document.getElementById(2).value
let derde = document.getElementById(3).value
let vierde = document.getElementById(4).value
let vijfde = document.getElementById(5).value
let zesde = document.getElementById(6).value
let zevende = document.getElementById(7).value
let achtste = document.getElementById(8).value
let negende = document.getElementById(9).value
let tiende = document.getElementById(10).value
let elfste = document.getElementById(11).value
let twaalfste = document.getElementById(12).value
let money = 330000000000

let totaal = Number(eerste) + Number(tweede) + Number(derde) + Number(vierde) + Number(vijfde) + Number(zesde) + Number(zevende) + Number(achtste) + Number(negende) + Number(tiende) + Number(elfste) + Number(twaalfste)

money = Number(money) - Number(totaal)
output.innerHTML = `totaal over/tekort: €${money}`
}



let leeftijd = window.prompt("wat is je leeftijd")

if (leeftijd < 1) {
    alert('Je bent een baby')
} else if ( leeftijd >= 1 && leeftijd <= 3){
    alert('Je bent een peuter')
} else if ( leeftijd > 3 && leeftijd <= 6){
    alert('Je bent een kleuter')
}  else if ( leeftijd > 6 && leeftijd <= 12){
    alert('Je bent een kind')
} else if ( leeftijd > 12 && leeftijd <= 16){
    alert('Je bent een puber')
} else if ( leeftijd > 16 && leeftijd <= 21){
    alert('Je bent een adolescent')
} else if ( leeftijd > 21){
    alert('Je bent een volwassene')
} else{
    alert("Dit is geen correcte value")
}
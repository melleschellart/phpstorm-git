
  let color = ["red","blue","green","yellow", "black","orange", "lightblue", "white", "purple", "brown"];
// Maak een loop van 0 tot 9
for (let i = 0; i < 10; i++) {
  // Maak een nieuwe div met een unieke ID
  let div = document.createElement("div");
  div.id = "div-" + i;
  div.classList.add(color[i % 10]);

  // Voeg de div toe aan de HTML-pagina
  document.body.appendChild(div);

  // Geef de div een unieke tekst
  div.innerHTML = "Div " + (i + 1);
}
const articoliCostituzione = [
  {
    numero: 1,
    testo: "L’Italia è una Repubblica democratica, fondata sul lavoro. La sovranità appartiene al popolo, che la esercita nelle forme e nei limiti della Costituzione."
  },
  {
    numero: 2,
    testo: "La Repubblica riconosce e garantisce i diritti inviolabili dell’uomo..."
  },
  {
    numero: 3,
    testo: "Tutti i cittadini hanno pari dignità sociale e sono eguali davanti alla legge..."
  },
  {
    numero: 4,
    testo: "La Repubblica riconosce a tutti i cittadini il diritto al lavoro e promuove le condizioni che rendano effettivo questo diritto."
  },
  {
    numero: 97,
    testo: "I pubblici uffici sono organizzati secondo disposizioni di legge, in modo che siano assicurati il buon andamento e l'imparzialità dell'amministrazione."
  }
  // Continuerò ad aggiungerli tutti
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("costituzione-container");

  articoliCostituzione.forEach(art => {
    const div = document.createElement("div");
    div.className = "articolo-cost";
    div.innerHTML = `
      <h3 id="art-${art.numero}">Articolo ${art.numero}</h3>
      <p>${art.testo}</p>
    `;
    container.appendChild(div);
  });
});

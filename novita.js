const novita = [
  {
    titolo: "Riforma del Codice Penale",
    descrizione: "Analisi degli effetti pratici del disegno di legge approvato a maggio 2025.",
    link: "contenuti.html"
  },
  {
    titolo: "Il principio di legalità nella Costituzione",
    descrizione: "Saggio tecnico sul ruolo della legalità nella teoria e nella prassi penale.",
    link: "approfondimenti.html"
  },
  {
    titolo: "Ultimi orientamenti della Cassazione in ambito civile",
    descrizione: "Focus su responsabilità medica e danno esistenziale.",
    link: "contenuti.html"
  },
  {
    titolo: "Guida aggiornata alla Legge 241/1990",
    descrizione: "Tutto sul procedimento amministrativo e la trasparenza.",
    link: "archivio.html"
  }
];

const container = document.getElementById("contenuti-dinamici");

novita.forEach(item => {
  const scheda = document.createElement("div");
  scheda.className = "scheda-novita";
  scheda.innerHTML = `
    <h3>${item.titolo}</h3>
    <p>${item.descrizione}</p>
    <a href="${item.link}">🔗 Vai al contenuto</a>
  `;
  container.appendChild(scheda);
});

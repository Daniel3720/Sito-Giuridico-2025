function eseguiRicerca() {
  const chiave = document.getElementById("barra-ricerca").value.toLowerCase();
  const filtro = document.getElementById("filtro-materia").value;
  const risultati = document.getElementById("risultati-ricerca");
  risultati.innerHTML = "";

  const filtrati = contenutiIndicizzati.filter(item => {
    const testo = (item.titolo + " " + item.descrizione).toLowerCase();
    const corrispondeTesto = testo.includes(chiave);
    const corrispondeMateria = filtro === "tutte" || item.materia === filtro;
    return corrispondeTesto && corrispondeMateria;
  });

  if (filtrati.length === 0) {
    risultati.innerHTML = "<p>❌ Nessun contenuto trovato.</p>";
    return;
  }

  filtrati.forEach(item => {
    const div = document.createElement("div");
    div.className = "scheda-novita";
    div.innerHTML = `
      <h3>${item.titolo}</h3>
      <p>${item.descrizione}</p>
      <a href="${item.link}">🔗 Vai alla pagina</a>
    `;
    risultati.appendChild(div);
  });
}

const codicePenale = [
  {
    libro: "LIBRO I - Dei reati in generale",
    titoli: [
      {
        titolo: "Titolo I - Della legge penale",
        capi: [
          {
            capo: "Capo I - Principi generali",
            articoli: [
              {
                numero: 1,
                testo: "Nessuno può essere punito per un fatto che non sia espressamente previsto come reato dalla legge..."
              },
              {
                numero: 2,
                testo: "Nessuno può essere punito per un fatto che, secondo una legge posteriore, non costituisce reato..."
              }
            ]
          }
        ]
      }
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("codicePenaleContainer");

  codicePenale.forEach(libro => {
    const divLibro = document.createElement("div");
    divLibro.innerHTML = `<h2>${libro.libro}</h2>`;
    libro.titoli.forEach(titolo => {
      const divTitolo = document.createElement("div");
      divTitolo.innerHTML = `<h3>${titolo.titolo}</h3>`;
      titolo.capi.forEach(capo => {
        const divCapo = document.createElement("div");
        divCapo.innerHTML = `<h4>${capo.capo}</h4>`;
        capo.articoli.forEach(art => {
          const divArt = document.createElement("div");
          divArt.className = "articolo-cost";
          divArt.innerHTML = `<strong>Art. ${art.numero}</strong><p>${art.testo}</p>`;
          divCapo.appendChild(divArt);
        });
        divTitolo.appendChild(divCapo);
      });
      divLibro.appendChild(divTitolo);
    });
    container.appendChild(divLibro);
  });
});

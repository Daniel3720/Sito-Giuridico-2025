const norme = {
  "art. 97 Cost.": {
    testo: "I pubblici uffici sono organizzati secondo disposizioni di legge, in modo che siano assicurati il buon andamento e l'imparzialità dell'amministrazione.",
    link: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947;97"
  },
  "art. 111 Cost.": {
    testo: "La giurisdizione si attua mediante il giusto processo regolato dalla legge. Ogni processo si svolge nel contraddittorio tra le parti, in condizioni di parità.",
    link: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947;111"
  },
  "art. 2043 c.c.": {
    testo: "Qualunque fatto doloso o colposo, che cagiona ad altri un danno ingiusto, obbliga colui che ha commesso il fatto a risarcire il danno.",
    link: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:codice.civile:1942;2043"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".norma").forEach(el => {
    const riferimento = el.textContent.trim();
    const norma = norme[riferimento];
    if (norma) {
      el.title = norma.testo;
      el.innerHTML = `<a href="${norma.link}" target="_blank" title="${norma.testo}">${riferimento}</a>`;
    }
  });
});

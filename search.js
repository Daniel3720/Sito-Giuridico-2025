function filterArticles() {
  const query = document.getElementById("searchBar").value.toLowerCase();
  const materia = document.getElementById("materiaFiltro").value;
  const articoli = document.querySelectorAll(".articolo");

  articoli.forEach(articolo => {
    const titolo = articolo.querySelector("h3").innerText.toLowerCase();
    const corpo = articolo.querySelector("p").innerText.toLowerCase();
    const categoria = articolo.dataset.materia;

    const corrispondeTesto = titolo.includes(query) || corpo.includes(query);
    const corrispondeMateria = materia === "tutte" || categoria === materia;

    articolo.style.display = (corrispondeTesto && corrispondeMateria) ? "block" : "none";
  });
}

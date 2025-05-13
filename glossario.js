function mostraGlossario() {
  const container = document.getElementById("glossarioContainer");
  container.innerHTML = "";

  glossario.forEach(voce => {
    const box = document.createElement("div");
    box.className = "voce-glossario";
    box.innerHTML = `<h3>${voce.termine}</h3><p>${voce.definizione}</p>`;
    container.appendChild(box);
  });
}

function filtraGlossario() {
  const query = document.getElementById("searchGlossario").value.toLowerCase();
  const container = document.getElementById("glossarioContainer");
  container.innerHTML = "";

  const filtrati = glossario.filter(voce =>
    voce.termine.toLowerCase().includes(query) || voce.definizione.toLowerCase().includes(query)
  );

  filtrati.forEach(voce => {
    const box = document.createElement("div");
    box.className = "voce-glossario";
    box.innerHTML = `<h3>${voce.termine}</h3><p>${voce.definizione}</p>`;
    container.appendChild(box);
  });
}

document.addEventListener("DOMContentLoaded", mostraGlossario);

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.createElement("div");
  sidebar.className = "sidebar";

  sidebar.innerHTML = `
    <h3>📚 Navigazione Rapida</h3>
    <ul>
      <li><a href="index.html">🏛️ Home</a></li>
      <li><a href="contenuti.html">📰 Notizie</a></li>
      <li><a href="approfondimenti.html">📘 Approfondimenti</a></li>
      <li><a href="cronologia.html">🕒 Cronologia</a></li>
      <li><a href="calendario.html">📅 Calendario</a></li>
      <li><a href="archivio.html">📚 Fonti</a></li>
      <li><a href="novita.html">🆕 Novità</a></li>
      <li><a href="faq.html">❓ FAQ</a></li>
      <li><a href="ricerca.html">🔎 Ricerca</a></li>
      <li><a href="mappa.html">📌 Mappa</a></li>
    </ul>
  `;

  document.body.appendChild(sidebar);
});

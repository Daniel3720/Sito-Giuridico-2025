document.addEventListener("DOMContentLoaded", function() {
  const lastModDate = new Date(document.lastModified);
  const formattedDate = lastModDate.toLocaleDateString("it-IT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });

  const container = document.createElement("div");
  container.style.textAlign = "center";
  container.style.fontSize = "14px";
  container.style.color = "#999";
  container.style.marginTop = "20px";
  container.innerHTML = `🔄 Ultima modifica: <strong>${formattedDate}</strong>`;

  document.body.appendChild(container);
});

function toggleNote(id) {
  const nota = document.getElementById(id);
  if (nota.style.display === "none") {
    nota.style.display = "block";
  } else {
    nota.style.display = "none";
  }
}

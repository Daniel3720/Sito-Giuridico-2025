document.addEventListener("DOMContentLoaded", () => {
  const calendar = document.getElementById("calendar");
  const eventDetails = document.getElementById("event-details");
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const table = document.createElement("table");
  table.classList.add("calendar-table");

  const headerRow = document.createElement("tr");
  ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"].forEach(day => {
    const th = document.createElement("th");
    th.textContent = day;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  let tr = document.createElement("tr");
  for (let i = 0; i < firstDay; i++) {
    tr.appendChild(document.createElement("td"));
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const td = document.createElement("td");
    const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

    td.textContent = day;

    if (eventiGiuridici[dateKey]) {
      td.classList.add("event-day");
      td.title = eventiGiuridici[dateKey].titolo;
      td.addEventListener("click", () => {
        eventDetails.innerHTML = `
          <h3>${eventiGiuridici[dateKey].titolo}</h3>
          <p>${eventiGiuridici[dateKey].descrizione}</p>
        `;
      });
    }

    tr.appendChild(td);
    if ((day + firstDay) % 7 === 0 || day === daysInMonth) {
      table.appendChild(tr);
      tr = document.createElement("tr");
    }
  }

  calendar.appendChild(table);
});

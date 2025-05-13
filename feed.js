const feedUrl = "https://eur-lex.europa.eu/rss/eurlex-it.xml";

fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`)
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById("rss-feed");
    list.innerHTML = "";
    data.items.slice(0, 5).forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a>`;
      list.appendChild(li);
    });
  })
  .catch(err => {
    document.getElementById("rss-feed").innerHTML = "<li>❌ Impossibile caricare le notizie. Riprova più tardi.</li>";
  });

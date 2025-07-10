function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

const apiKey = "5d8e3b0a7e44c68df0d4fbdbe932d4b1"; // GNews demo key (replace with your own key if needed)
const url = `https://gnews.io/api/v4/search?q=uttar%20pradesh&lang=hi&token=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("news-container");
    container.innerHTML = "";
    data.articles.forEach(article => {
      const div = document.createElement("div");
      div.className = "news-card";
      div.innerHTML = `
        <h3>${article.title}</h3>
        <p>${article.description || ""}</p>
        <a href="${article.url}" target="_blank">पूरा पढ़ें</a>
      `;
      container.appendChild(div);
    });
  })
  .catch(error => {
    document.getElementById("news-container").innerHTML = "समाचार लोड नहीं हो पाए।";
    console.error(error);
  });

let xhr = new XMLHttpRequest();

let url = "./health_article.json";

xhr.open("GET", url, true);

xhr.responseType = "json";

xhr.onload = function () {
  let articles = xhr.response.articles;

  let articlesDiv = document.getElementById("articles");

  articles.forEach(function (article) {
    let articleDiv = document.createElement("div");
    articleDiv.classList.add("article");

    let title = document.createElement("h2");
    title.textContent = article.title;

    let description = document.createElement("p");
    description.textContent = article.description;

    let waysHeader = document.createElement("h3");
    waysHeader.textContent = "Ways to achieve:";

    let waysList = document.createElement("ul");

    article.ways.forEach(function (way) {
      let wayItem = document.createElement("li");
      wayItem.textContent = way;
      waysList.appendChild(wayItem);
    });

    let benefitsHeader = document.createElement("h3");
    benefitsHeader.textContent = "Benefits:";

    let benefitsList = document.createElement("ul");

    article.benefits.forEach(function (benefit) {
      let benefitItem = document.createElement("li");
      benefitItem.textContent = benefit;
      benefitsList.appendChild(benefitItem);
    });

    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(waysHeader);
    articleDiv.appendChild(waysList);
    articleDiv.appendChild(benefitsHeader);
    articleDiv.appendChild(benefitsList);

    articlesDiv.appendChild(articleDiv);
  });
};

xhr.send();

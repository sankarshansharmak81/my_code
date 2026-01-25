const quote = document.getElementById("quote");
const aurthor = document.getElementById("author");

const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
  quote.innerHTML = data.content;
  aurthor.innerHTML = data.author;
}

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" + quote.innerHTML + "----- by" + aurthor.innerHTML,
    "Tweet Window",
    "width = 600 , height = 300"
  );
}

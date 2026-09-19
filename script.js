const sites = [
  "https://www.wikipedia.org",
  "https://www.nasa.gov",
  "https://archive.org",
  "https://www.mozilla.org",
  "https://www.britannica.com",
  "https://www.metmuseum.org",
  "https://www.loc.gov",
  "https://www.si.edu"
];

const button = document.getElementById("randomButton");

button.addEventListener("click", function () {

  const randomIndex = Math.floor(
    Math.random() * sites.length
  );

  const randomSite = sites[randomIndex];

  window.location.href = randomSite;

});

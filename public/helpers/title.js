function shrinkTitle() {
  let url = window.location.pathname;
  if (url.length > 4) {
    document.getElementById("title").style.fontSize = "2rem";
  }
}

module.exports = { shrinkTitle };

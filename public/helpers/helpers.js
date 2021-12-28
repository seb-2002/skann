function getFormAction(lang, url) {
  let subPath = url.substring(3);
  let action = "/" + lang + subPath;
  return action;
}

function handleLang() {
  const url = window.location.pathname;
  const thisLang = url.substring(1, 3);
  let allLangOptions = ["en", "fr"];
  let langOption = allLangOptions.filter((lang) => lang !== thisLang)[0];
  let action = getFormAction(langOption, url);

  document.getElementById("langForm").action = action;
  document.getElementById("langButton").innerHTML = langOption;
  return url;

  console.log({ action, langOption });
}

const backButton = `
    <div>
    <form id="backForm" method="GET">
      <button type="button submit" class="back-button" id="backButton">
        <p id="backButton"> <- </p>
      </button>
    </form>
    </div>
  `;

function appendBackButton(html) {
  document.getElementById("button-box").innerHTML += html;
}

function getBackAction(url, html) {
  let lastCharIndex = url.length - 1;
  if (url[lastCharIndex] === "/") {
    url = url.substring(0, lastCharIndex);
  }
  let lastIndex = url.lastIndexOf("/");
  if (lastIndex > 0) {
    appendBackButton(html);
    let backAction = url.substring(0, lastIndex);
    document.getElementById("backForm").action = backAction;
  }
}

function createLinksandColors() {
  let url = handleLang();
  generateColorValues();
  getBackAction(url, backButton);
}

function generateColorValues() {
  const randomSat = Math.random() * 100;
  const randomSat2 = Math.random() * 100;
  const randomLight = Math.random() * 50 + 40;
  const randomLight2 = Math.random() * 50 + 40;
  const randomHue = Math.random() * 360;
  const randomHue2 = Math.random() * 360;
  const randomDegree = `${Math.random() * 360}deg`;
  const randomColor = `hsl(${randomHue}, ${randomSat}%, ${randomLight}%)`;
  const randomColor2 = `hsl(${randomHue2}, ${randomSat2}%, ${randomLight2}%)`;
  const beige = "#CCCCCC";
  const newBackground = `linear-gradient(${randomDegree}, ${randomColor}, ${beige} , ${randomColor2})`;
  console.log(newBackground);
  document.getElementById("body-box").style.background = newBackground;
}

module.exports = {
  createLinksandColors,
};

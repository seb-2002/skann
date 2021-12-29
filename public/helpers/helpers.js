function getFormAction(lang, url) {
  let subPath = url.substring(3);
  let action = "/" + lang + subPath;
  return action;
}

function getLang() {
  const url = window.location.pathname;
  const thisLang = url.substring(1, 3);
  return { thisLang, url };
}

function setLang(thisLang, url) {
  let allLangOptions = ["en", "fr"];
  let langOption = allLangOptions.filter((lang) => lang !== thisLang)[0];
  let action = getFormAction(langOption, url);

  document.getElementById("langForm").action = action;
  document.getElementById("langButton").innerHTML = langOption;
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

function setBackAction(url, html) {
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

function setHomeAction(thisLang) {
  let action = `/${thisLang}`;
  let homeButton = document.getElementById("homeButton");
  if (homeButton) {
    homeButton.action = action;
  }
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
  document.getElementById("body-box").style.background = newBackground;
}

function shrinkTitle() {
  let url = window.location.pathname;
  if (url.length > 4) {
    document.getElementById("title").style.fontSize = "2rem";
  }
}

function handleFunction() {
  let { thisLang, url } = getLang();
  console.log(thisLang);
  setLang(thisLang, url);
  setHomeAction(thisLang);
  generateColorValues();
  shrinkTitle();

  // setBackAction(url, backButton);
}

// module.exports = {
//   handleFunction,
// };

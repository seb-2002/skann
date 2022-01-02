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
    
    <form id="backForm" method="GET" action="/back">
      <button type="button submit" class="menu-button menu-button__cat" id="backButton">
        <p id="backButton"> ⬅ </p>
      </button>
    </form>
    
  `;

function appendBackButton(html) {
  let buttonBox = document.getElementById("button-box__back");
  let priorContent = buttonBox.innerHTML;
  buttonBox.innerHTML = html + priorContent;
  // document.getElementById("button-box__flex").innerHTML += html;
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

module.exports = {
  getLang,
  setLang,
  setHomeAction,
  setBackAction,
  backButton,
};

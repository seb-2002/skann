const { generateObjectPositions } = require("./scatterMenu");
const {
  getLang,
  setLang,
  setHomeAction,
  backButton,
  setBackAction,
} = require("./buttons");
const { generateColorValues } = require("./handleColors");
const { shrinkTitle } = require("./title");
const { isMobile } = require("./handleResponsivity");
const { assignCopyButtonBehaviour } = require("./copy");

function handleFunction() {
  let { thisLang, url } = getLang();
  setLang(thisLang, url);
  setHomeAction(thisLang);
  // setBackAction(url, backButton);
  generateColorValues();
  shrinkTitle();
  assignCopyButtonBehaviour("contact-button");
  if (!isMobile()) {
    generateObjectPositions("menu-box", 75, 5);
  }
}

window.onload = (e) => {
  handleFunction();
};

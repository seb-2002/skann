(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const { generateObjectPositions } = require("./scatterMenu");

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

function isMobile() {
  let width = screen.width;
  if (width >= 540) {
    return false;
  } else {
    return true;
  }
}

function handleFunction() {
  let { thisLang, url } = getLang();
  console.log(thisLang);
  setLang(thisLang, url);
  setHomeAction(thisLang);
  generateColorValues();
  shrinkTitle();
  if (!isMobile()) {
    generateObjectPositions("menu-box", 80, 3);
  }
}

window.onload = (e) => {
  handleFunction();
};

},{"./scatterMenu":2}],2:[function(require,module,exports){
const countHTMLObjectsByClass = (className) => {
  let HTMLObjects = document.getElementsByClassName(className);
  return HTMLObjects.length;
};

const getNumAbsoluteValue = (max, difference, array) => {
  let newNum = 0;
  let resultsArray = [];
  while (resultsArray.length < array.length) {
    newNum = Math.floor(Math.random() * (max + 1));
    console.log(`Testing ${newNum}`);
    for (let elm of array) {
      console.log(`Testing against ${elm}`);
      if (elm - newNum > difference || elm - newNum < -difference) {
        console.log(`${newNum} is at least ${difference} away from ${elm}`);
        resultsArray.push(newNum);
        console.log(`Results array: ${resultsArray}`);
      } else {
        console.log(`${newNum} is too close to ${elm}!`);
        resultsArray = [];
        console.log(`Results array: ${resultsArray}`);
      }
    }
    if (resultsArray.length < array.length && resultsArray.length > 0) {
      resultsArray = [];
    }
  }
  const result = resultsArray[0];
  return result;
};

const generatePositionValues = (numberOfElms, rangeOfPxls, minDifPixls) => {
  let topsArray = [0];
  let leftsArray = [0];
  for (let i = 0; i < numberOfElms; i++) {
    let newTop = getNumAbsoluteValue(rangeOfPxls, minDifPixls, topsArray);
    topsArray.push(newTop);
  }
  for (let i = 0; i < numberOfElms; i++) {
    let newLeft = getNumAbsoluteValue(rangeOfPxls, minDifPixls, leftsArray);
    leftsArray.push(newLeft);
  }
  topsArray.shift();
  leftsArray.shift();

  return { topsArray, leftsArray };
};

const assignStyles = (className, posArray1, posArray2) => {
  let howManyObjects = countHTMLObjectsByClass(className);
  for (i = 1; i <= posArray1.length; i++) {
    let thisElm = document.getElementsByClassName(`${className}-${i}`)[0];
    console.log(thisElm);
    thisElm.style.top = `${posArray1[i - 1]}%`;
    thisElm.style.left = `${posArray2[i - 1]}%`;
  }
  return;
};

const generateObjectPositions = (className, rangeOfPxls, minDifPixls) => {
  let howManyObjects = countHTMLObjectsByClass(className);
  let objectPositions = generatePositionValues(
    howManyObjects,
    rangeOfPxls,
    minDifPixls
  );
  let { leftsArray, topsArray } = objectPositions;
  assignStyles(className, topsArray, leftsArray);
  return;
};

module.exports = {
  generateObjectPositions,
};

},{}]},{},[1]);

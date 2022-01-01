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

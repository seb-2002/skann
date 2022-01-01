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

module.exports = {
  generateColorValues,
};

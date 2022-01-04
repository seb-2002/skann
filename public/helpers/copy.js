function copyText() {
  const copy = document.getElementById("email").innerHTML;
  navigator.clipboard.writeText(copy);

  const tooltip = document.getElementById("tooltip-text");
  tooltip.innerHTML = "Copied!";
}

function outFunc() {
  var tooltip = document.getElementById("tooltip-text");
  tooltip.innerHTML = "Copy to clipboard";
}

function assignCopyButtonBehaviour(id) {
  const contactButton = document.getElementById(id);
  if (contactButton) {
    const titleBox = document.getElementsByClassName("title-box")[0];
    titleBox.style.visibility = "hidden";
    contactButton.onclick = () => copyText();
    contactButton.onmouseout = () => outFunc();
  }
}

module.exports = {
  assignCopyButtonBehaviour,
};

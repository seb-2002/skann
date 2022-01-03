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
  contactButton.onclick = () => copyText();
  contactButton.onmouseout = () => outFunc();
}

module.exports = {
  assignCopyButtonBehaviour,
};

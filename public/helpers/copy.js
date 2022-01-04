function copyText() {
  const copy = document.getElementById("email").innerHTML;
  navigator.clipboard.writeText(copy);

  const tooltipEn = document.getElementById("tooltip-text__en");
  const tooltipFr = document.getElementById("tooltip-text__fr");
  if (tooltipEn) {
    tooltipEn.innerHTML = "Copied!";
  } else if (tooltipFr) {
    tooltipFr.innerHTML = "Copié!";
  }
}

function outFunc() {
  const tooltipEn = document.getElementById("tooltip-text__en");
  const tooltipFr = document.getElementById("tooltip-text__fr");
  if (tooltipEn) {
    tooltipEn.innerHTML = "Click to copy";
  } else if (tooltipFr) {
    tooltipFr.innerHTML = "Cliquez pour copier";
  }
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

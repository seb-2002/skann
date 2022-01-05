function showNav () {
  let navBar = document.getElementsByClassName("nav")[0];
  let categoryBody = document.getElementsByClassName("category-body")[0];
  console.log(navBar);
  navBar.style.transform = "translateX(0)";
  categoryBody.onclick = () => hideNav();


}

function hideNav () {
  let navBar = document.getElementsByClassName("nav")[0];
  navBar.style.transform = "translateX(-100%)";
  
}

function assignShowNav (id) {
  let navButton = document.getElementById(id);
  if (navButton) {
    
  navButton.onclick = () => showNav();
  }

}

module.exports = {
  assignShowNav,
}
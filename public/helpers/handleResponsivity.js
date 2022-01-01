function isMobile() {
  let width = screen.width;
  if (width >= 540) {
    return false;
  } else {
    return true;
  }
}

module.exports = { isMobile };

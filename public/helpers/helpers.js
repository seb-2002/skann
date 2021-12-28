   
   function getFormAction(lang, url) {
      let subPath = url.substring(3);
      let action = '/'+ lang + subPath;
      return action;
    }

    function handleLang() {
      const url = window.location.pathname
      const thisLang = url.substring(1,3);
      let allLangOptions = ['en', 'fr'];
      let langOption = allLangOptions.filter(lang=> lang !== thisLang)[0];
      let action = getFormAction(langOption, url);
   
      document.getElementById("langForm").action = action;
      document.getElementById("langButton").innerHTML = langOption;
      return url;

      console.log({action, langOption});
    }

    
    
    function getBackAction (url) {
      let lastCharIndex = url.length-1;
      if (url[lastCharIndex] === '/') {
        url = url.substring(0,lastCharIndex);
      }
      let lastIndex = url.lastIndexOf('/');
      if (lastIndex > 0) {
        let backAction = url.substring(0, lastIndex);
        document.getElementById("backForm").action = backAction;
      } else {
        document.getElementById("backForm").remove();
    }}

    
    
    function createLinks () {
      let url = handleLang ();
      getBackAction(url);
    }

    module.exports = {
  createLinks,
};
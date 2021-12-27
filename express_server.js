const express = require("express");
const app = express();
const PORT = 8080; // default port 8080

const db = {
  en: {
    menuItems: {
      Bio: "this is my bio",
      Performance: "performances",
      "Writing/Dramaturgy": "",
      Teaching: "",
      Dates: "",
      Links: "",
      Contact: "sebastiankann@gmail.com",
    },
  },
  fr: {
    menuItems: {
      Bio: "this is my bio",
      Création: "performances",
      "Écriture/Dramaturgie": "",
      Pédagogie: "",
      Dates: "",
      Liens: "",
      Contact: "sebastiankann@gmail.com",
    },
  },
};

app.get("/", (req, res) => {
  res.send("<html><body>Hello <b>World</b></body></html>\n");
});

app.listen(PORT, () => {
  console.log(`skann listening on port ${PORT}!`);
});

app.get("/urls.json", (req, res) => {
  res.json(db);
});

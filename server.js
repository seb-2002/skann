const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const defaultLang = "en";

const app = express();
app.use(helmet());
const PORT = 8080;

app.set("view engine", "ejs");

app.use(compression()); //Compress all routes
app.use("/static", express.static("public"));

const { db } = require("./dbs");
const { redirect } = require("express/lib/response");

app.listen(process.env.PORT || PORT, () => {
  console.log(`skann listening on port ${PORT}!`);
});

app.get("/urls.json", (req, res) => {
  res.json(db);
});

app.get("/", (req, res) => {
  //detect browser language
  const langString = req.headers["accept-language"];
  const lang = langString.substring(0, 2);
  //serve the french page if fr
  if (lang === "fr") {
    res.redirect("/fr");
  } else if (lang === "en") {
    res.redirect("/en");
  } else {
    //else serve default lang
    res.redirect(`/${defaultLang}`);
  }
});

app.get("/:lang", (req, res) => {
  const lang = req.params.lang;
  const templateVars = {
    menuItems: db[lang].menuItems,
    lang,
  };

  if (lang) {
    res.render("root", templateVars);
  }
});

app.get("/en/:menuItem", (req, res) => {
  const menuItem = req.params.menuItem;
  const templateVars = {
    category: db.en.menuItems[menuItem],
  };
  res.render("category_page", templateVars);
});

app.get("/en/perf/:perf", (req, res) => {
  const perf = req.params.perf;
  const templateVars = {
    perfData: db.en.menuItems.perf[perf],
  };
  res.render("perfs", templateVars);
});

app.get("/fr/:menuItem", (req, res) => {
  const menuItem = req.params.menuItem;
  const templateVars = {
    category: db.fr.menuItems[menuItem],
  };
  res.render("category_page", templateVars);
});

app.get("/fr/perf/:perf", (req, res) => {
  const perf = req.params.perf;
  const templateVars = {
    perfData: db.fr.menuItems.perf[perf],
  };
  res.render("perfs", templateVars);
});

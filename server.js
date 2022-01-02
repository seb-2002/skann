const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const session = require("express-session");
const defaultLang = "en";
const PORT = 8080;

const app = express();

const sess = {
  // genid: function (req) {
  //   return genuuid(); // use UUIDs for session IDs
  // },

  cookie: {},
  secret: "circus",
  resave: false,
  saveUninitialized: true,
};

const { db } = require("./dbs");
const { redirect } = require("express/lib/response");
const { MemoryStore } = require("express-session");
const req = require("express/lib/request");

app.use(helmet());

app.set("view engine", "ejs");
// app.set("trust proxy", 1); // trust first proxy

if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}

app.use(session(sess));

app.use(compression()); //Compress all routes
app.use("/static", express.static("public"));

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
  if (lang === "en" || lang === "fr") {
    if (req.session.history) {
      req.session.history.push(lang);
    } else {
      req.session.history = [lang];
    }
    console.log(`User history: ${JSON.stringify(req.session.history)}`);
    const templateVars = {
      menuItems: db[lang].menuItems,
      lang,
    };
    res.render("root", templateVars);
  }
});

app.get("/en/:menuItem", (req, res) => {
  const menuItem = req.params.menuItem;
  if (req.session.history) {
    req.session.history.push(`en/${menuItem}`);
  } else {
    req.session.history = [`en/${menuItem}`];
  }
  console.log(`User history: ${JSON.stringify(req.session.history)}`);
  const templateVars = {
    category: db.en.menuItems[menuItem],
  };
  res.render("category_page", templateVars);
});

app.get("/en/perf/:perf", (req, res) => {
  const perf = req.params.perf;
  if (req.session.history) {
    req.session.history.push(`en/perf/${perf}`);
  } else {
    req.session.history = [`en/perf/${perf}`];
  }
  console.log(`User history: ${JSON.stringify(req.session.history)}`);
  const templateVars = {
    perfData: db.en.menuItems.perf[perf],
  };
  res.render("perfs", templateVars);
});

app.get("/fr/:menuItem", (req, res) => {
  const menuItem = req.params.menuItem;
  if (req.session.history) {
    req.session.history.push(`fr/${menuItem}`);
  } else {
    req.session.history = [`fr/${menuItem}`];
  }
  console.log(`User history: ${JSON.stringify(req.session.history)}`);
  const templateVars = {
    category: db.fr.menuItems[menuItem],
  };
  res.render("category_page", templateVars);
});

app.get("/fr/perf/:perf", (req, res) => {
  const perf = req.params.perf;
  if (req.session.history) {
    req.session.history.push(`fr/perf/${perf}`);
  } else {
    req.session.history = [`fr/perf/${perf}`];
  }
  console.log(`User history: ${JSON.stringify(req.session.history)}`);
  const templateVars = {
    perfData: db.fr.menuItems.perf[perf],
  };
  res.render("perfs", templateVars);
});

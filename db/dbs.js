const { db_en } = require("./db_en/db_en.js");
const { db_fr } = require("./db_fr/db_fr.js");

const db = {
  en: db_en,
  fr: db_fr,
};

module.exports = {
  db,
};

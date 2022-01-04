const { bio_en } = require("./bio_en.js");
const { works_en } = require("./works_en.js");
const { collab_en } = require("./collab_en.js");
const { pgogy_en } = require("./pgogy_en.js");
const { agenda_en } = require("./agenda_en.js");
const { web_en } = require("./web_en.js");
const { contact_en } = require("./contact_en.js");

const db_en = {
  menuItems: {
    bio: bio_en,
    works: works_en,
    collab: collab_en,
    pgogy: pgogy_en,
    agenda: agenda_en,
    web: web_en,
    contact: contact_en,
  },
};

module.exports = {
  db_en,
};

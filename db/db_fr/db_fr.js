const { bio_fr } = require("./bio_fr.js");
const { works_fr } = require("./works_fr.js");
const { collab_fr } = require("./collab_fr.js");
const { pgogy_fr } = require("./pgogy_fr.js");
const { agenda_fr } = require("./agenda_fr.js");
const { web_fr } = require("./web_fr.js");
const { contact_fr } = require("./contact_fr.js");

const db_fr = {
  menuItems: {
    bio: bio_fr,
    works: works_fr,
    collab: collab_fr,
    pgogy: pgogy_fr,
    agenda: agenda_fr,
    web: web_fr,
    contact: contact_fr,
  },
};

module.exports = {
  db_fr,
};

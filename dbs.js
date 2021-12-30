const db = {
  en: {
    menuItems: {
      bio: {
        title: "Bio",
        ticker: "bio",
        text: [
          {
            p: "Sebastian Kann (he/him) is a performer, theorist, dramaturge and performance maker.",
            href: "",
          },
          {
            p: "A graduate of the National Circus School in Montréal, his practice has been shaped by formative encounters with circus and dance communities in both Europe and North America.",
            href: "",
          },
          {
            p: "His most recent performance, Always / Beautiful (created in 2019 with Natalie Oleinik), asks questions about why and how to stage technical virtuosity in the context of exhausting, performance-oriented success culture. ",
            href: "/en/perf/always_beautiful",
          },
          {
            p: "  Kann is active as a writer, most recently co-editing Thinking Through Circus (APE Books, 2020), a collection of circus writing to which he also contributed a chapter.",
            href: "https://artpapereditions.org/product/book/bauke-lievens-quintijn-ketels-sebastian-kann-vincent-focquet-thinking-through-circus",
          },
          {
            p: "In his studio practice, he takes aim at collective fantasies of embodiment, autonomy, and spontaneity, in an attempt to make palpable some of the ways liberalism has rendered these concepts difficult, incoherent, or impossible.",
            href: "/en/perf/topical_dance",
          },
          {
            p: "As a dramaturge, he works extensively with the independent circus scene in Québec, supporting the creative processes of Emile Pineault, François Bouvier, and the Chita Project (Anna Kichtchenko and Pablo Pramparo), among others.",
            href: "/en/web",
          },
          {
            p: "He lives in Montréal / Tiohtiá:ke, on the expropriated land of the Kanien’kehá:ka (Haudenosaunee Confederacy.",
            href: "",
          },
        ],
      },

      perf: {
        href: "/en/perf/",
        title: "Performance",
        ticker: "performance",
        always_beautiful: {
          title: "Always / Beautiful",
          ticker: "a/b",
          year: 2019,
          src: "/static/src/ab_pic_1.jpg",
          credits:
            "creation- Natalie Oleinik + Sebastian Kann // dramaturgy- Ilse Ghekiere // lights- Bert van Dijck // rigging- Lee Harry Clayden // special thanks to- Hugo Mega, François Bouvier, Vera Tussing and Anneleen Keppens.",
        },
        topical_dance: {
          title: "Topical Dance",
          ticker: "topical dance",
          year: "research 2022",
          src: "",
          credits: "creation-Sebastian Kann",
        },
      },

      dturgy: {
        title: "Theory/Practice",
        ticker: "theory/practice",
        year_2021: {
          year: 2021,
          writing: {
            title: "Writing &c",
            projects: {
              caio: {
                description:
                  "“Critical approaches to improvisation in circus performance (and some examples): unpacking the ideological with a detour through dance studies” (forthcoming)",
                href: "https://www.circusanditsothers.org/speakers-and-artists",
              },
              tohu: {
                description:
                  "Circus Dramaturgy in Canada: Problems of Technique” (forthcoming)",
              },
            },
          },
          dramaturgy: {
            title: "Dramaturgical collaborations",
            projects: {
              chose_en_soi: {
                description:
                  "The Chita Project- Anna Kichtchenko and Pablo Prampano // 'La Chose en soi' (research/working title)",
                href: "https://www.facebook.com/thechitaproject/",
              },
            },
          },
          performer: {
            title: "Perfoming for others",
            projects: {},
          },
        },
        year_2020: {
          year: 2020,
          writing: {
            title: "Writing &c",
            projects: {
              caio: {
                description:
                  "“Critical approaches to improvisation in circus performance (and some examples): unpacking the ideological with a detour through dance studies” (forthcoming)",
                href: "https://www.circusanditsothers.org/speakers-and-artists",
              },
              tohu: {
                description:
                  "Circus Dramaturgy in Canada: Problems of Technique” (forthcoming)",
              },
            },
          },
          dramaturgy: {
            title: "Dramaturgical collaborations",
            projects: {},
          },
          performer: {
            title: "Perfoming for others",
            projects: {},
          },
        },
      },

      pgogy: {
        title: "Teaching",
        ticker: "teaching",
      },

      agenda: {
        title: "Dates",
        ticker: "dates",
      },

      web: {
        title: "Links",
        ticker: "links",
      },

      contact: {
        title: "Contact",
        ticker: "@",
        address: "sebastiankann@gmail.com",
      },
    },
  },

  fr: {
    menuItems: {
      bio: {
        title: "Bio",
        ticker: "bio",
      },

      perf: {
        title: "Création",
        ticker: "créa",
        always_beautiful: {
          title: "Always / Beautiful",
          ticker: "a/b",
        },
        topical_dance: {
          title: "Topical Danse",
          ticker: "topical danse",
        },
      },

      dturgy: {
        title: "Écriture/Dramaturgie",
        ticker: "théorie/praxis",
      },

      pgogy: {
        title: "Pédagogie",
        ticker: "pédagogie",
      },

      agenda: {
        title: "Agenda",
        ticker: "dates",
      },

      web: {
        title: "Liens",
        ticker: "web",
      },

      contact: {
        title: "Contact",
        ticker: "@",
        address: "sebastiankann@gmail.com",
      },
    },
  },
};

module.exports = {
  db,
};

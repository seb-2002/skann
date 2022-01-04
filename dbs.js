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
            href: "/en/works/always_beautiful",
          },
          {
            p: "  Kann is active as a writer, most recently co-editing Thinking Through Circus (APE Books, 2020), a collection of circus writing to which he also contributed a chapter.",
            href: "https://artpapereditions.org/product/book/bauke-lievens-quintijn-ketels-sebastian-kann-vincent-focquet-thinking-through-circus",
          },
          {
            p: "In his studio practice, he takes aim at collective fantasies of embodiment, autonomy, and spontaneity, in an attempt to make palpable some of the ways liberalism has rendered these concepts difficult, incoherent, or impossible.",
            href: "/en/works/topical_dance",
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

      works: {
        href: "/en/works/",
        title: "Works",
        ticker: "works",
        topical_dance: {
          title: "Topical Dance",
          ticker: "topical dance",
          year: "research 2022",
          src: "",
          credits: "creation- Sebastian Kann",
        },

        always_beautiful: {
          title: "Always / Beautiful",
          ticker: "a/b",
          year: "creation 2019",
          src: "/static/src/ab_pic_1.jpg",
          credits:
            "creation- Natalie Oleinik + Sebastian Kann // dramaturgy- Ilse Ghekiere // lights- Bert van Dijck // rigging- Lee Harry Clayden // special thanks to- Hugo Mega, François Bouvier, Vera Tussing, Anneleen Keppens",
        },

        choreographing_touch: {
          title: "Choreographing Touch - Conversations",
          year: "podcast 2021",
          src: "/static/src/touch_pod_img.jpg",
          credits:
            "hosted by- Sebastian Kann + Vera Tussing // production, editing- Michael Picknett // image- Sarah Yu Zeebroek // with the participation of- Sarah van Lamsweerde, Alicia Hoost, Malik Nashad Sharpe, Salva Sanchis, Astrit Ismaili, Rebecca Goodine, Enric Granzotto Llagostera ",
          href_ex:
            "https://www.spreaker.com/show/choreographing-touch-conversations",
        },

        thinking_through_circus: {
          title: "Thinking Through Circus",
          year: "publication 2020",
          src: "/static/src/ttc_img.png",
          credits:
            "edited by- Bauke Lievens, Sebastian Kann, Quintijn Ketels, Vincent Focquet (The Circus Dialogues) // with contributions by- Camille Paycha, Dana Dugan, Mardulier en Deprez, Francesca Hyde, Josef Stiller, Natalie Oleinik, Anna Tauber, Floor van Leeuwen, Iris Carta, Alexandre Fray, Aline Breucker, Fran-Tank, François Bouvier",
          href_ex: "https://www.circusdialogue.com/thinking-through-circus",
        },
      },

      collab: {
        title: "Collaborations",
        ticker: "working together",
        year_2021: {
          year: 2021,
          dramaturgy: {
            title: "Studio dramaturgy",
            projects: {
              lowest_parts: {
                title: "The Lowest Parts",
                description: "Emile Pineault (research phase)",
                href: "https://emilepineault.com/projects/2022-the-lowest-parts/",
              },
              chose_en_soi: {
                title: "La chose en soi (working title)",
                description:
                  "The Chita Project // Anna Kichtchenko and Pablo Prampano (research phase/working title)",
                href: "https://www.facebook.com/thechitaproject/",
              },
            },
          },
          performer: {
            title: "Perfoming for others",
            projects: {
              sarah_manya: {
                title: "Montréal Danse research workshop",
                description:
                  "choreography- Sarah Manya // dance- Sebastian Kann + Erin Hill",
                href: "https://montrealdanse.com/new2/",
              },
              nien_tzu: {
                title: "Danse Cité Espace Recherche",
                description:
                  "choreography - Nien Tzu Weng // performance- Nien Tzu Weng, Basile Herrmann Philippe, Sebastian Kann // sound design- Sebastian Kann",
                href: "https://danse-cite.org/recherche-activites/espace-recherche",
              },
            },
          },
          web: {
            title: "Web",
            projects: {
              acrobatetoimeme: {
                title: "acrobatetoimeme.com",
                description:
                  "artist site for François Bouvier // design + development- Sebastian Kann",
                href: "https://www.acrobatetoimeme.com/",
                src: "/static/src/franky_img.png",
              },
              emilepineault: {
                title: "emilepineault.com",
                description:
                  "artist site for Emile Pineault // design- Benjamin Jacques // development- Sebastian Kann",
                href: "https://emilepineault.com/",
                src: "/static/src/emile_img.png",
              },
            },
          },
        },
        year_2020: {
          year: 2020,
          writing: {
            title: "Writing &c",
            projects: {},
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
        year_2022: {
          year: 2022,
          theory: {
            title: "Theory",
            projects: {
              innovating_circus_technique: {
                title: "Innovating circus technique",
                description: "A weekly seminar for DEC students @ ENC",
              },
            },
          },
          Practice: {
            title: "Studio practice",
            projects: {
              artistic_counseling: {
                title: "Artistic Counselor @ ENC",
              },
            },
          },
          performer: {
            title: "Perfoming for others",
            projects: {},
          },
        },
      },

      agenda: {
        title: "Dates",
        ticker: "dates",
        year_2022: {
          year: 2022,
          innovating_circus_technique: {
            type: "teaching",
            type_href: "/en/pgogy",
            title: "Innovating circus technique",
            dates: "jan-apr",
            institution: "ENC",
            institution_href: "www.enc.qc.ca",
            place: "Montréal / Tiohtiá:ke",
          },
          imgss: {
            type: "residency",
            type_href: "/en/collab",
            title: "I miss grandma so Sad",
            dates: "22-28aug",
            institution: "La Chapelle",
            institution_href:
              "https://lachapelle.org/fr/programmation/residence",
            place: "Montréal / Tiohtiá:ke",
          },
        },
      },
      web: {
        title: "Links",
        ticker: "web",
        collaborators: {
          type: "Collaborators",
          Natalie: {
            label: "Natalie Oleinik",
            href: "https://vimeo.com/noleinik?embedded=true&source=owner_name&owner=3322502",
          },
          Vera: {
            label: "Vera Tussing",
            href: "https://www.veratussing.com/",
          },
        },
        residencies: {
          type: "Residencies",
        },
        resources: {
          type: "Resources",
        },
        presenters: {
          type: "Presenters",
        },
        schools: {
          type: "Schools",
        },
        funding: {
          type: "Funding",
        },
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
        text: [
          {
            p: "Sebastian Kann (he/him) is a performer, theorist, dramaturge and performance maker.",
            href: "",
          },
          {
            p: "Diplomé de National Circus School in Montréal, his practice has been shaped by formative encounters with circus and dance communities in both Europe and North America.",
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

      works: {
        title: "Création",
        ticker: "créa",
        topical_dance: {
          title: "Topical Dance",
          ticker: "topical dance",
          year: "research 2022",
          src: "",
          credits: "création- Sebastian Kann",
        },
        acrobatetoimeme: {
          title: "acrobatetoimeme.com",
          year: "2021",
          src: "/static/src/franky_img.png",
          credits: "web design and development- Sebastian Kann",
          href_ex: "https://www.acrobatetoimeme.com/",
        },
        choreographing_touch: {
          title: "Choreographing Touch - Conversations",
          year: "2021",
          src: "/static/src/touch_pod_img.jpg",
          credits:
            "hosted by- Sebastian Kann + Vera Tussing // production, editing- Michael Picknett // image- Sarah Yu Zeebroek // with the participation of- Sarah van Lamsweerde, Alicia Hoost, Malik Nashad Sharpe, Salva Sanchis, Astrit Ismaili, Rebecca Goodine, Enric Granzotto Llagostera ",
          href_ex:
            "https://www.spreaker.com/show/choreographing-touch-conversations",
        },
        always_beautiful: {
          title: "Always / Beautiful",
          ticker: "a/b",
          year: 2019,
          src: "/static/src/ab_pic_1.jpg",
          credits:
            "creation- Natalie Oleinik + Sebastian Kann // dramaturgy- Ilse Ghekiere // lights- Bert van Dijck // rigging- Lee Harry Clayden // special thanks to- Hugo Mega, François Bouvier, Vera Tussing, Anneleen Keppens",
        },
      },

      collab: {
        title: "Collaboration",
        ticker: "travailler ensemble",
        year_2021: {
          year: 2021,
          writing: {
            title: "Ecriture &c",
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

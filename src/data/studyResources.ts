
export type StudyResource = {
  title: string;
  url: string;
};

export const studyResourcesBySubject: Record<string, StudyResource[]> = {
  math: [
    {
      title: "Khan Academy - Mathematics",
      url: "https://www.khanacademy.org/math"
    },
    {
      title: "Paul's Online Math Notes",
      url: "https://tutorial.math.lamar.edu/"
    },
    {
      title: "Brilliant - Interactive Math Courses",
      url: "https://brilliant.org/courses/#math-foundational"
    },
    {
      title: "MIT OpenCourseWare - Mathematics",
      url: "https://ocw.mit.edu/search/?d=Mathematics"
    }
  ],
  algebra: [
    {
      title: "Khan Academy - Algebra",
      url: "https://www.khanacademy.org/math/algebra"
    },
    {
      title: "Algebra.com",
      url: "https://www.algebra.com/"
    },
    {
      title: "Purplemath - Algebra",
      url: "https://www.purplemath.com/"
    }
  ],
  calculus: [
    {
      title: "Khan Academy - Calculus",
      url: "https://www.khanacademy.org/math/calculus-1"
    },
    {
      title: "Professor Leonard - Calculus Videos",
      url: "https://www.youtube.com/playlist?list=PLF797E961509B4EB5"
    },
    {
      title: "MIT OpenCourseWare - Single Variable Calculus",
      url: "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/"
    }
  ],
  statistics: [
    {
      title: "Khan Academy - Statistics & Probability",
      url: "https://www.khanacademy.org/math/statistics-probability"
    },
    {
      title: "StatTrek",
      url: "https://stattrek.com/"
    },
    {
      title: "OpenIntro Statistics",
      url: "https://www.openintro.org/book/os/"
    }
  ],
  biology: [
    {
      title: "Khan Academy - Biology",
      url: "https://www.khanacademy.org/science/biology"
    },
    {
      title: "Crash Course - Biology",
      url: "https://www.youtube.com/playlist?list=PL3EED4C1D684D3ADF"
    },
    {
      title: "OpenStax Biology",
      url: "https://openstax.org/details/books/biology-2e"
    },
    {
      title: "CK-12 Biology",
      url: "https://www.ck12.org/book/ck-12-biology/"
    }
  ],
  chemistry: [
    {
      title: "Khan Academy - Chemistry",
      url: "https://www.khanacademy.org/science/chemistry"
    },
    {
      title: "Crash Course - Chemistry",
      url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtPHzzYuWy6fYEaX9mQQ8oGr"
    },
    {
      title: "OpenStax Chemistry",
      url: "https://openstax.org/details/books/chemistry-2e"
    },
    {
      title: "ChemGuide",
      url: "https://www.chemguide.co.uk/"
    }
  ],
  physics: [
    {
      title: "Khan Academy - Physics",
      url: "https://www.khanacademy.org/science/physics"
    },
    {
      title: "MIT OpenCourseWare - Physics",
      url: "https://ocw.mit.edu/search/?d=Physics"
    },
    {
      title: "Crash Course - Physics",
      url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtN0ge7yDk_UA0ldZJdhwkoV"
    },
    {
      title: "The Physics Classroom",
      url: "https://www.physicsclassroom.com/"
    }
  ],
  history: [
    {
      title: "Khan Academy - World History",
      url: "https://www.khanacademy.org/humanities/world-history"
    },
    {
      title: "Crash Course - World History",
      url: "https://www.youtube.com/playlist?list=PLBDA2E52FB1EF80C9"
    },
    {
      title: "History.com",
      url: "https://www.history.com/"
    },
    {
      title: "OpenStax U.S. History",
      url: "https://openstax.org/details/books/us-history"
    }
  ],
  literature: [
    {
      title: "SparkNotes",
      url: "https://www.sparknotes.com/"
    },
    {
      title: "LitCharts",
      url: "https://www.litcharts.com/"
    },
    {
      title: "Crash Course - Literature",
      url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOeEc9ME62zTfqc0h6Pe8vb"
    },
    {
      title: "Project Gutenberg",
      url: "https://www.gutenberg.org/"
    }
  ],
  english: [
    {
      title: "Purdue OWL - Writing Resources",
      url: "https://owl.purdue.edu/owl/purdue_owl.html"
    },
    {
      title: "Khan Academy - Grammar",
      url: "https://www.khanacademy.org/humanities/grammar"
    },
    {
      title: "Grammarly Blog",
      url: "https://www.grammarly.com/blog/"
    },
    {
      title: "Thesaurus.com",
      url: "https://www.thesaurus.com/"
    }
  ],
  language: [
    {
      title: "Duolingo",
      url: "https://www.duolingo.com/"
    },
    {
      title: "BBC Languages",
      url: "https://www.bbc.co.uk/languages/"
    },
    {
      title: "FluentU",
      url: "https://www.fluentu.com/"
    },
    {
      title: "Memrise",
      url: "https://www.memrise.com/"
    }
  ],
  programming: [
    {
      title: "freeCodeCamp",
      url: "https://www.freecodecamp.org/"
    },
    {
      title: "Codecademy",
      url: "https://www.codecademy.com/"
    },
    {
      title: "MDN Web Docs",
      url: "https://developer.mozilla.org/"
    },
    {
      title: "W3Schools",
      url: "https://www.w3schools.com/"
    }
  ],
  general: [
    {
      title: "Khan Academy",
      url: "https://www.khanacademy.org/"
    },
    {
      title: "Coursera",
      url: "https://www.coursera.org/"
    },
    {
      title: "edX",
      url: "https://www.edx.org/"
    },
    {
      title: "MIT OpenCourseWare",
      url: "https://ocw.mit.edu/"
    }
  ],
  sat: [
    {
      title: "Khan Academy - SAT",
      url: "https://www.khanacademy.org/test-prep/sat"
    },
    {
      title: "College Board - Official SAT Practice",
      url: "https://collegereadiness.collegeboard.org/sat/practice"
    },
    {
      title: "Princeton Review - SAT Prep",
      url: "https://www.princetonreview.com/college/sat-test-prep"
    },
    {
      title: "Varsity Tutors - SAT Resources",
      url: "https://www.varsitytutors.com/sat-resources"
    }
  ],
  act: [
    {
      title: "ACT.org - Official ACT Prep",
      url: "https://www.act.org/content/act/en/products-and-services/the-act/test-preparation.html"
    },
    {
      title: "Khan Academy - ACT",
      url: "https://www.khanacademy.org/test-prep/act"
    },
    {
      title: "Princeton Review - ACT Prep",
      url: "https://www.princetonreview.com/college/act-test-prep"
    },
    {
      title: "Magoosh ACT",
      url: "https://magoosh.com/act/"
    }
  ],
  gre: [
    {
      title: "ETS - Official GRE Prep",
      url: "https://www.ets.org/gre/test-takers/general-test/prepare.html"
    },
    {
      title: "Manhattan Prep - GRE",
      url: "https://www.manhattanprep.com/gre/"
    },
    {
      title: "Magoosh GRE",
      url: "https://magoosh.com/gre/"
    },
    {
      title: "GregMat",
      url: "https://www.gregmat.com/"
    }
  ],
  gmat: [
    {
      title: "MBA.com - Official GMAT Prep",
      url: "https://www.mba.com/exams/gmat-exam/prepare-for-the-gmat-exam"
    },
    {
      title: "Manhattan Prep - GMAT",
      url: "https://www.manhattanprep.com/gmat/"
    },
    {
      title: "Magoosh GMAT",
      url: "https://magoosh.com/gmat/"
    },
    {
      title: "GMAT Club",
      url: "https://gmatclub.com/"
    }
  ],
  mcat: [
    {
      title: "AAMC - Official MCAT Prep",
      url: "https://students-residents.aamc.org/prepare-mcat-exam/prepare-mcat-exam"
    },
    {
      title: "Khan Academy - MCAT",
      url: "https://www.khanacademy.org/test-prep/mcat"
    },
    {
      title: "Princeton Review - MCAT Prep",
      url: "https://www.princetonreview.com/medical/mcat-test-prep"
    },
    {
      title: "Jack Westin - MCAT CARS Practice",
      url: "https://jackwestin.com/"
    }
  ],
  lsat: [
    {
      title: "LSAC - Official LSAT Prep",
      url: "https://www.lsac.org/lsat/prep"
    },
    {
      title: "Khan Academy - LSAT",
      url: "https://www.khanacademy.org/prep/lsat"
    },
    {
      title: "Princeton Review - LSAT Prep",
      url: "https://www.princetonreview.com/law/lsat-test-prep"
    },
    {
      title: "7Sage LSAT",
      url: "https://7sage.com/"
    }
  ]
};

module.exports = {
  corePlugins: {
    container: false,
  },
  future: {},
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter"],
      },
      inset: {
        '100%': '100%',
        '15.3%': '15.3%',
        '20.19%': '20.19%',
        '13.3%': '13.3%',
        '5.23%': '5.23%',
        '38%': '38%',
      },
      maxWidth: {
        '903p': '56.438rem',
        '472.65p': '29.541rem',
      },

      maxHeight: {
        '816p': '51rem',
        '209.27p': '13.079rem',
      },

      colors: {
        projectColors: {
          "dark-gray": "#343A40",
          "text-gray": "#383838",
          "light-blue": '#5192E1',
        },
      },
      fontSize: {
        "button-text": ["1.125rem", "1.361rem"], // 18 21.78
        'blue-button-text': ['1.406rem', '1.688rem'], // 22.5 27
        'hero-big': ['8.063rem', '9.75rem'], // 129 156
        'blue-section': ['2.438rem', '2.964rem'], // 39 47.43
      },
      spacing: {
        "104p": "6.5rem",
        "132p": "8.25rem",
        "46p": "2.875rem",
        "75.6p": "4.725rem",
        "59.12p": "3.695rem",
        "87.5p": "5.469rem",
        '209p': '13.063rem',
        '63p': '3.938rem',
        '42p': '2.625rem',
        '110p': '6.875rem',
        '324p': '20.25rem',
        '30p': '1.875rem',
        '119p': '7.438rem',
        '285p': '17.813rem',
        '188p': '11.75rem',
      },
    },
  },
};

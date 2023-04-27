module.exports = {
  corePlugins: {
    container: false,
  },
  future: {},
  purge: [],
  theme: {
    screens: {
      xs: "390px",
      sm: "580px",
      md: "635px",
      lg: "900px",
      xl: "1100px",
      xxl: "1435px",
      xxxl: "1728px",
      container: "1729px",
      xxxxl: "1921px",
    },
    extend: {
      fontFamily: {
        body: ["Inter"],
      },
      inset: {
        "100%": "100%",
        "15.3%": "15.3%",
        "20.19%": "20.19%",
        "13.3%": "13.3%",
        "5.23%": "5.23%",
        "38%": "38%",
        "10%neg": "-10%",
        "20px-": "-20px",
        "10%": "10%",
        "8%": "8%",
        "5%": "5%",
        "20%neg": "-20%",
        "22%neg": "-22%",
        "7%": "7%",
        "14%": "14%",
      },
      maxWidth: {
        "903p": "56.438rem",
        "472.65p": "29.541rem",
        "482p": "30.125rem",
        "450p": "28.125rem",
        "609p": "38.063rem",
        "1078p": "67.375rem",
        "282p": "17.625rem",
        "550p": "34.375rem",
        "240p": "15rem",
        "640p": "40rem",
      },

      maxHeight: {
        "816p": "51rem",
        "209.27p": "13.079rem",
      },

      colors: {
        projectColors: {
          "dark-gray": "#343A40",
          "text-gray": "#383838",
          "light-blue": "#5192E1",
          "light-gray": "#F1F1F1",
          "lighter-blue": "#EDF6FF",
          "input-border": "#C4C4C4",
          "dark-blue": "#004080",
        },
      },
      fontSize: {
        "button-text": ["1.125rem", "1.361rem"], // 18 21.78
        "blue-button-text": ["1.406rem", "1.688rem"], // 22.5 27
        "hero-big": ["8.063rem", "9.75rem"], // 129 156
        "blue-section": ["2.438rem", "2.964rem"], // 39 47.43
        "gray-section-1": ["4.25rem", "5.144rem"], // 68 82.3
        "gray-section-2": ["1rem", "1.214rem"], // 16 19.43
        vertical: ["2rem", "2.438rem"], // 16 39
        ask: ["3.75rem", "4.538rem"], // 60 72.6
        "input-text": ["0.938rem", "1.144rem"], // 15 18.3
        "small-hero": ["3.05rem", "3.688rem"], // 48.8 59
        "button-small": ["0.75rem", "0.956rem"], // 12 15
        "our-goal": ["1.106rem", "1.341rem"], // 17.7 21.45
        specification: ["0.9rem", "1.088rem"], // 14.4 17.4
        discovery: ["1.688rem", "2.05rem"], // 27 32.8
        "description-small": ["0.875rem", "1.063rem"], // 14 17
      },
      spacing: {
        "104p": "6.5rem",
        "132p": "8.25rem",
        "46p": "2.875rem",
        "75.6p": "4.725rem",
        "59.12p": "3.695rem",
        "87.5p": "5.469rem",
        "209p": "13.063rem",
        "63p": "3.938rem",
        "42p": "2.625rem",
        "324p": "20.25rem",
        "30p": "1.875rem",
        "119p": "7.438rem",
        "285p": "17.813rem",
        "188p": "11.75rem",
        "116.6p": "7.288rem",
        "152.13p": "9.508rem",
        "90p": "5.625rem",
        "351p": "21.938rem",
        "68p": "4.25rem",
        "335p": "20.938rem",
        "153p": "9.563rem",
        "110p": "6.875rem",
        "130p": "8.125rem",
        "198p": "12.375rem",
        "262p": "16.375rem",
        "144p": "9rem",
        "152p": "9.5rem",
        "133p": "8.313rem",
        "51p": "3.188rem",
        "136p": "8.5rem",
        "213p": "13.313rem",
        "113p": "7.063rem",
        "140p": "8.75rem",
        "201p": "12.563rem",
        "65.3p": "4.081rem",
        "215p": "13.438rem",
        "69p": "4.313rem",
        "265p": "16.563rem",
        "178p": "11.125rem",
        "155p": "9.688rem",
        "546p": "34.125rem",
        "185p": "11.563rem",
        "112p": "7rem",
        "266p": "16.625rem",
        "57p": "3.563rem",
        "49p": "3.063rem",
        "282p": "17.625rem",
        "25.7p": "1.606rem",
        "219p": "13.688rem",
        "26.7p": "1.669rem",
        "158.5p": "9.906rem",
        "50p": "3.125rem",
        "64p": "4rem",
        "67p": "4.188rem",
        "189p": "11.813rem",
        "340.5p": "21.284rem",
        "124p": "7.75rem",
        "41.65p": "2.603rem",
        "158p": "9.875rem",
        "115p": "7.188rem",
        "35p": "2.188rem",
        "84p": "5.25rem",
        "160p": "10rem",
        "70p": "4.375rem",
        "88p": "5.5rem",
        "264p": "16.438rem",
        "233p": "14.563rem",
        "137p": "8.563rem",
        "85p": "5.313rem",
        "54p": "3.375rem",
        "276p": "17.25rem",
        "52p": "3.25rem",
        "500p": "31.25rem",
        "100p": "6.25rem",
        "71p": "4.438rem",
        "14p": "0.875rem",
        "26.4p": "1.65rem",
        "10p": "0.625rem",
        "251p": "15.688rem",
        "77p": "4.813rem",
        "37p": "2.313rem",
        "210p": "13.125rem",
        "97p": "6.063rem",
        "73p": "4.563rem",
        "88p": "5.5rem",
        "58p": "3.625rem",
        "700px": "43.75rem",
        "650p": "40.625rem",
      },
    },
  },
};

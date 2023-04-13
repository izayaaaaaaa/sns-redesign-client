const { grey, primary } = colorTokens;

export const themeSettings = (mode = 'light') => ({
  palette: {
    mode,
    ...(mode === "dark" ? {
      // palette values for dark mode
      primary: {
        dark: primary[200],
        main: primary[500],
        light: primary[800],
      },
      neutral: {
        dark: grey[100],
        main: grey[200],
        mediumMain: grey[300],
        medium: grey[400],
        light: grey[700],
      },
      background: {
        default: grey[900],
        alt: grey[800],
      },
    } : {
      // palette values for light mode
      primary: {
        dark: primary[700],
        main: primary[500],
        light: primary[50],
      },
      neutral: {
        dark: grey[700],
        main: grey[500],
        mediumMain: grey[400],
        medium: grey[300],
        light: grey[50],
      },
      background: {
        default: grey[10],
        alt: grey[0],
      },
    }),
  },
  typography: {
    fontFamily: ["Rubik", "sans-serif"].join(","),
    fontSize: 12,
    h1: { fontFamily: ["Rubik", "sans-serif"].join(","), fontSize: 40 },
    h2: { fontFamily: ["Rubik", "sans-serif"].join(","), fontSize: 32 },
    h3: { fontFamily: ["Rubik", "sans-serif"].join(","), fontSize: 24 },
    h4: { fontFamily: ["Rubik", "sans-serif"].join(","), fontSize: 20 },
    h5: { fontFamily: ["Rubik", "sans-serif"].join(","), fontSize: 16 },
    h6: { fontFamily: ["Rubik", "sans-serif"].join(","), fontSize: 14 },
  },
});

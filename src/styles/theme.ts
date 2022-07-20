export const theme = {
  colors: {
    base: {
      c1: 'rgb(255, 255, 255)',
      c2: 'rgb(249, 249, 249)  ',
      c3a: 'rgba(241, 245, 245, 0.6)',
      c4: 'rgb(235, 240, 240)',
      c4a: 'rgba(235, 240, 240, 0.7)',
      c5: 'rgb(207, 219, 213)',
      c5a: 'rgba(207, 219, 213, 0.6)',
      c6: 'rgb(93, 93, 91)',
      c6a: 'rgba(93, 93, 91, 0.4)',
      c7: 'rgb(0, 0, 0)',
      c7a: 'rgba(0, 0, 0, 0.4)',
    },
    contrast: {
      c1: 'rgb(255, 0, 0)',
      c2: 'rgb(237, 27, 73)',
      c2a: 'rgba(237, 27, 73,0.6)',
      c3: 'rgb(244, 82, 82)',
      c3a: 'rgba(248, 151, 151, 0.4)',
      c4: 'rgb(248, 151, 151)',
      c4a: 'rgba(248, 151, 151, 0.4)',
    },
  },
  font: {
    family: {
      primary: '"Inter", sans-serif',
      secondary: '"Montserrat", sans-serif',
    },
    size: {
      xl: '3.2rem',
      l: '2rem',
      m: '1.6rem',
      s: '1.4rem',
      xs: '1.2rem',
      xxs: '1rem',
    },
  },
};

export type ITheme = typeof theme;

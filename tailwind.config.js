const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  variants: {
    extend: {
      backgroundColor: ['group-hover'],
      visibility: ['hover', 'focus', 'group-hover'],
    },
    visibility: ['group-hover'],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gotham', ...defaultTheme.fontFamily.sans],
      },
      height: {
        'screen-1/2': '50vh',
      },
      minHeight: {
        'screen-1/2': '50vh',
      },
      padding: {
        '16-9ratio': '56.25%',
      },
      colors: {
        california: '#fb9b03',
        'normal-blue': {
          500: '#0f2646',
        },
        'dark-blue': {
          200: '#3b4552',
          700: '#0d223c',
          800: '#011023',
          900: '#030b16',
        },
      },
      inset: {
        '1/2': '50%',
        4: '1rem',
        6: '1.5rem',
        8: '2rem',
        '-4': '-1rem',
        '-6': '-1.5rem',
        '-8': '-2rem',
        '-12': '-3rem',
      },
      borderWidth: {
        12: '12px',
      },
      lineHeight: {
        12: '3rem',
        14: '3.5rem',
      },
    },
  },
  plugins: [],
};

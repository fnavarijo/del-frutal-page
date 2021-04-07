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
      width: {
        7: '1.75rem',
        '30px': '30px',
        '37px': '37px',
      },
      height: {
        7: '1.75rem',
        '30px': '30px',
        'screen-1/2': '50vh',
        'screen-1/3': '33vh',
      },
      minHeight: {
        'screen-1/3': '33vh',
        'screen-1/2': '50vh',
        'screen-2/3': '66vh',
      },
      padding: {
        '16-9ratio': '56.25%',
      },
      colors: {
        california: '#fb9b03',
        'normal-blue': {
          100: '#ced5de',
          500: '#0f2646',
        },
        'dark-blue': {
          200: '#3b4552',
          700: '#0d223c',
          800: '#011023',
          900: '#030b16',
        },
        'neutral-gray': {
          200: '#f1f1f1',
          500: '#7c7c7c',
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
        '-16': '-4rem',
        '-20': '-5rem',
        '-250': '-250px',
      },
      borderWidth: {
        12: '12px',
      },
      lineHeight: {
        12: '3rem',
        14: '3.5rem',
      },
      transformOrigin: {
        'left-center': '0 50%',
      },
      flex: {
        2: '2',
      },
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};

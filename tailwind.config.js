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
        'extra-full': '150%',
        7: '1.75rem',
        '30px': '30px',
        '37px': '37px',
        '200px': '200px',
        '640px': '640px',
        '860px': '860px',
      },
      height: {
        7: '1.75rem',
        '30px': '30px',
        'screen-1/2': '50vh',
        'screen-1/3': '33vh',
        '1/2': '50%',
        '4/5': '80%',
        '450px': '450px',
      },
      minHeight: {
        'screen-1/3': '33vh',
        'screen-1/2': '50vh',
        'screen-2/3': '66vh',
      },
      padding: {
        '16-9ratio': '56.25%',
        '2-ratio': '200%',
      },
      colors: {
        california: '#fb9b03',
        'normal-blue': {
          100: '#ced5de',
          500: '#0f2646',
        },
        'normal-red': {
          400: '#e23342',
        },
        'normal-yellow': {
          400: '#f2a83d',
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
        '1/4': '25%',
        4: '1rem',
        6: '1.5rem',
        8: '2rem',
        '-4': '-1rem',
        '-6': '-1.5rem',
        '-8': '-2rem',
        '-12': '-3rem',
        '-16': '-4rem',
        '-20': '-5rem',
        '-24': '-6rem',
        '-28': '-7rem',
        '-32': '-8rem',
        '-40': '-10rem',
        '-48': '-12rem',
        '-56': '-14rem',
        '-60': '-16rem',
        '-64': '-18rem',
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
        'box-bigger': 'minmax(0, 1fr) minmax(0, 2fr)',
      },
      translate: {
        '1/4': '25%',
        '-1/4': '-25%',
      },
    },
  },
  plugins: [],
};

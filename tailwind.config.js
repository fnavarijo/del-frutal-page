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
      screens: {
        '2xl': '1536px',
      },
      fontFamily: {
        sans: ['Gotham', ...defaultTheme.fontFamily.sans],
      },
      backgroundSize: {
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
        '50%-cover': '50%, cover',
        '60%-cover': '60%, cover',
        '90%-cover': '90%, cover',
      },
      backgroundPosition: {
        'custom-top-left-banner': '5% 0%, top left',
        'custom-center-banner': 'center top, top left',
        'medal-md-alignment': '100% 15%, right bottom, top left',
        'medal-sm-alignment': '100% 10%, right bottom, top left',
      },
      width: {
        'extra-full': '150%',
        'extra-mid-full': '120%',
        7: '1.75rem',
        28: '7rem',
        '30px': '30px',
        '37px': '37px',
        '200px': '200px',
        '400px': '400px',
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
        full: '100%',
        '15%': '15%',
        '1/4': '25%',
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
          500: '#d7bd68',
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
        'normal-brown': {
          500: '#331503',
        },
        'dark-red': {
          300: '#9C2401',
          500: '#532716',
          600: '#3F170D',
          700: '#300F08',
        },
      },
      opacity: {
        10: '.1',
        20: '.2',
        30: '.3',
        80: '.8',
        90: '.9',
        95: '.95',
        98: '.98',
      },
      inset: {
        '1/2': '50%',
        '1/4': '25%',
        4: '1rem',
        6: '1.5rem',
        8: '2rem',
        '-2': '-0.5rem',
        '-4': '-1rem',
        '-6': '-1.5rem',
        '-8': '-2rem',
        '-12': '-3rem',
        '-14': '-3.5rem',
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

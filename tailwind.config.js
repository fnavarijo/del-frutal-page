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
      height: {
        'screen-1/2': '50vh',
      },
      minHeight: {
        'screen-1/2': '50vh',
      },
      colors: {
        california: '#fb9b03',
        'normal-blue': {
          500: '#0f2646',
        },
        'dark-blue': {
          200: '#3b4552',
          800: '#011023',
          900: '#030b16',
        },
      },
      inset: {
        '1/2': '50%',
      },
      borderWidth: {
        12: '12px',
      },
    },
  },
  plugins: [],
};

const variables = {
  colors: {
    black: '#1D2326',
    burgandy: '#611427',
    champagne: '#DDDCC5',
    gray: '#6A6A61',
    tan: '#958976',
  },

  font: {
    families: {
      cursive: 'Pacifico, cursive',
      sansSerif: 'Roboto, sans-serif',
    },
    headings: {
      lineHeight: '1.125',
      marginBottom: '20px',
    },
    sizes: {
      one: '3rem',
      two: '2.5rem',
      three: '1.75rem',
      four: '1.5rem',
      five: '1.25rem',
      six: '1rem',
    },
  },

  misc: {
    columnGap: '1.25rem',
    easing: 'ease-out',
    headerHeight: '3.125rem',
    maxWidth: '60rem',
    radius: '.25rem',
    speed: '86ms',
  },

  formBase: {
    background: '#fff',
    borderColor: '#dddcc5',
    borderStyle: 'solid',
    borderWidth: '1px',
    color: '#1D2326',
    display: 'inline-block',
    fontSize: '1.25rem',
    height: '2.5rem',
    lineHeight: '2',
    MozAppearance: 'none',
    padding: '.25rem .67rem',
    position: 'relative',
    verticalAlign: 'top',
    WebkitAppearance: 'none',

    ':hover': {
      borderColor: '#958976',
    },

    ':active': {
      borderColor: '#611427',
      outline: 'none',
    },

    ':focus': {
      borderColor: '#611427',
      outline: 'none',
    },
  },
};

export default variables;

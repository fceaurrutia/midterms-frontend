import { extendTheme } from '@chakra-ui/react';

export const breakpoints = {
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
};

export const theme = extendTheme({
  colors: {
    pinkBG:
      'linear-gradient(0deg, rgba(236,236,236,1) 0%, rgba(255,138,138,1) 100%)',
  },
  breakpoints,
  components: {
    Button: {
      variants: {
        botonculiao: {
          width: '100%',
          background: '#232925',
          color: 'white',
          transition: '0.125s all ease-in',
          _hover: {
            background: '#647568',
          },
        },
      },
    },
  },
});

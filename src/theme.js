import { createTheme } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
    typography: {
        fontFamily: 'Source Code Pro, Arial, sans-serif',
    },
  
    palette: {
      mode: 'light',
      primary: {
        main: '#61dbfb',
      },
      secondary: {
        main: '#fb8161',
      },
      success: {
        main: '#61fbce',
      },
    },
};
  
const theme = createTheme(themeOptions);

export default theme;

import React from 'react';
import ReactDOM from 'react-dom/client';//manipular
import {ThemeProvider} from 'styled-components';

import GlobalStyles from './pages/styles/global';
import theme from './pages/styles/theme';

import {Details} from './pages/Details';

ReactDOM.createRoot(document.getElementById('root')).render( //renderizado.....// ThemeProvider- prover e compartilhar
  <React.StrictMode>
    <ThemeProvider theme={theme}> 
    <GlobalStyles />
    <Details />
    </ThemeProvider>
  </React.StrictMode>,
)

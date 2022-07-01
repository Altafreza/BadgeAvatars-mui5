import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import AvtarWithBadge from './AvtarWithBadge.js';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <AvtarWithBadge />
    </StyledEngineProvider>
  </React.StrictMode>
);

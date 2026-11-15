import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './main.css';
import { HubApp } from '@tessel/hub';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Elemento root não encontrado.');
}

createRoot(rootElement).render(
  <StrictMode>
    <HubApp />
  </StrictMode>,
);
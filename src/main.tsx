import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {registerSW} from 'virtual:pwa-register';
import App from './App.tsx';
import './index.css';

// Precaches the app shell so previously visited pages keep working offline.
// registerType 'autoUpdate' means a newer deployed version takes over
// automatically the next time there's a connection.
registerSW({ immediate: true });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

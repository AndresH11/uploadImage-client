import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PreloadProvider } from './contexts/PreloadProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PreloadProvider>
      <App />
    </PreloadProvider>
  </React.StrictMode>
);

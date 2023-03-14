import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from "react-i18next"
import i18next from 'i18next';
import global_es from "./languages/es/global.json"
import global_en from "./languages/en/global.json"


i18next.init({
  interpolation: { escapeValue: false },
  lng:"es",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </Router>
);


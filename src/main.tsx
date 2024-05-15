import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode >
      <React.Suspense fallback={<div>Loading...</div>}>
        <Router >
          <App />
        </Router>
      </React.Suspense>
    </React.StrictMode>,
  );
}

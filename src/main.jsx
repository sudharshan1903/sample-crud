import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import { GlobalServiceProvider  } from './services/GlobalServices.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <GlobalServiceProvider>
          <App />
        </GlobalServiceProvider>
      </BrowserRouter>
  </React.StrictMode>,
)

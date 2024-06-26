import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import EcommerceProvider from './api/contextApi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <EcommerceProvider>
      <App />
    </EcommerceProvider>
  // </React.StrictMode>,
)

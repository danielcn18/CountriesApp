import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Countries from './Countries.jsx'
import SearchApp from './SearchApp.jsx'
import ImprovedSearchApp from './ImprovedSearchApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchApp />
  </React.StrictMode>,
)

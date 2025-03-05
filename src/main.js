import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import { store } from './components/redux/store'
import App from './components/App/App'

const rootElement = document.getElementById('root')
if (rootElement) {
  const root = createRoot(rootElement)
  root.render(React.createElement(Provider, { store }, React.createElement(App, null)))
}

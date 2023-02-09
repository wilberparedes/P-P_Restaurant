import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'

import App from './App'
import './styles/globals.css'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
)

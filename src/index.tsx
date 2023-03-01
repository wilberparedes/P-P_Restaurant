import { StrictMode } from 'react'

import { PersistGate } from 'redux-persist/integration/react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import '@/styles/globals.css'
import { GlobalStyle } from '@/styles/global'
import { theme } from '@/styles/theme'

import { persistor, store } from '@/store'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
)

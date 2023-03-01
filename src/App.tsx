import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'

import { theme } from '@/styles/theme'
import { GlobalStyle } from '@/styles/global'
import { persistor, store } from '@/store'
import Routes from '@/routes'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { lightTheme } from './styles/themes/light'
import { Home } from './pages/home'
import { ModalProvider } from './contexts/modal'
import { ScrollHandlerProvider } from './contexts/scrollHandler'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <ScrollHandlerProvider>
        <ModalProvider>
          <GlobalStyle />
          <Home />
        </ModalProvider>
      </ScrollHandlerProvider>
    </ThemeProvider>
  )
}

export default App

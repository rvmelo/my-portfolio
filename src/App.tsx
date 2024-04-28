import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { lightTheme } from './styles/themes/light'
import { Home } from './pages/home'
import { LanguageModalProvider } from './contexts/languageModal'
import { ScrollHandlerProvider } from './contexts/scrollHandler'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <ScrollHandlerProvider>
        <LanguageModalProvider>
          <GlobalStyle />
          <Home />
        </LanguageModalProvider>
      </ScrollHandlerProvider>
    </ThemeProvider>
  )
}

export default App

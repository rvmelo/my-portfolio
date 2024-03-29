import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { lightTheme } from './styles/themes/light'
import { Home } from './pages/home'
import { LanguageModalProvider } from './contexts/languageModal'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <LanguageModalProvider>
        <GlobalStyle />
        <Home />
      </LanguageModalProvider>
    </ThemeProvider>
  )
}

export default App

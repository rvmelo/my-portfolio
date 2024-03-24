import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { lightTheme } from './styles/themes/light'
import { Home } from './pages/home'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}

export default App

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { lightTheme } from './styles/themes/light'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <h1>My Porftfolio!</h1>
    </ThemeProvider>
  )
}

export default App

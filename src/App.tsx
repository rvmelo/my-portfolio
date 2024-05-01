import { GlobalStyle } from './styles/global'
import { Home } from './pages/home'
import { ModalProvider } from './contexts/modal'
import { ScrollHandlerProvider } from './contexts/scrollHandler'
import { UserThemeProvider } from './contexts/theme'
import { SelectedTheme } from './components/SelectedTheme'

function App() {
  return (
    <UserThemeProvider>
      <SelectedTheme>
        <ScrollHandlerProvider>
          <ModalProvider>
            <GlobalStyle />
            <Home />
          </ModalProvider>
        </ScrollHandlerProvider>
      </SelectedTheme>
    </UserThemeProvider>
  )
}

export default App

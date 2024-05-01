import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'

interface UserThemeContextData {
  setUserTheme: (value: 'light' | 'dark') => void
  verifySystemTheme: () => 'light' | 'dark'
  userTheme: 'light' | 'dark'
}

const UserThemeContext = createContext({} as UserThemeContextData)

export const UserThemeProvider = ({ children }: PropsWithChildren) => {
  const verifySystemTheme = () => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return 'dark'
    } else {
      return 'light'
    }
  }

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')
    const mqlListener = (event: MediaQueryListEvent) => {
      setUserTheme(event.matches ? 'dark' : 'light')
    }

    mediaQueryList.addEventListener('change', mqlListener)

    return () => {
      mediaQueryList.removeEventListener('change', mqlListener)
    }
  }, [])

  const [userTheme, setUserTheme] = useState<'light' | 'dark'>(
    verifySystemTheme(),
  )

  return (
    <UserThemeContext.Provider
      value={{
        userTheme,
        setUserTheme,
        verifySystemTheme,
      }}
    >
      {children}
    </UserThemeContext.Provider>
  )
}

export function useUserTheme() {
  const context = useContext(UserThemeContext)

  if (!context) {
    throw new Error(
      'User Theme Context must be used within a User Theme Provider',
    )
  }

  return context
}

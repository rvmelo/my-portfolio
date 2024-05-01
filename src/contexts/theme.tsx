import { createContext, PropsWithChildren, useContext, useState } from 'react'

interface UserThemeContextData {
  setUserTheme: (value: 'light' | 'dark') => void
  userTheme: 'light' | 'dark'
}

const UserThemeContext = createContext({} as UserThemeContextData)

export const UserThemeProvider = ({ children }: PropsWithChildren) => {
  const [userTheme, setUserTheme] = useState<'light' | 'dark'>('light')

  return (
    <UserThemeContext.Provider
      value={{
        userTheme,
        setUserTheme,
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

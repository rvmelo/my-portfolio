import React, { ReactNode } from 'react'
import { useUserTheme } from '../../contexts/theme'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../../styles/themes/light'
import { darkTheme } from '../../styles/themes/dark'

interface SelectedThemeProps {
  children: ReactNode
}

export const SelectedTheme: React.FC<SelectedThemeProps> = ({ children }) => {
  const { userTheme } = useUserTheme()

  return (
    <ThemeProvider theme={userTheme === 'light' ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  )
}

import { createContext, useState, PropsWithChildren, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { useUserTheme } from './theme'

interface ModalContextData {
  isLanguageModalOpened: boolean
  isThemeModalOpened: boolean
  handleLanguageSelection: (value: 'en' | 'pt') => void
  handleCloseModals: () => void
  handleThemeSelection: (value: 'light' | 'dark') => void
  handleLanguageModal: (value: boolean) => void
  handleThemeModal: (value: boolean) => void
}

const ModalContext = createContext({} as ModalContextData)

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const {
    i18n: { changeLanguage },
  } = useTranslation()

  const { setUserTheme } = useUserTheme()

  const [isLanguageModalOpened, setIsLanguageModalOpened] = useState(false)
  const [isThemeModalOpened, setIsThemeModalOpened] = useState(false)

  const handleLanguageModal = (value: boolean) => {
    if (value) {
      setIsLanguageModalOpened(value)
      setIsThemeModalOpened(false)
      return
    }

    setIsLanguageModalOpened(value)
  }

  const handleThemeModal = (value: boolean) => {
    if (value) {
      setIsThemeModalOpened(value)
      setIsLanguageModalOpened(false)
      return
    }

    setIsThemeModalOpened(value)
  }

  const handleCloseModals = () => {
    setIsLanguageModalOpened(false)
    setIsThemeModalOpened(false)
  }

  const handleLanguageSelection = (value: 'en' | 'pt') => {
    changeLanguage(value)
    setIsLanguageModalOpened(false)
    setIsThemeModalOpened(false)
  }

  const handleThemeSelection = (value: 'light' | 'dark') => {
    setUserTheme(value)
    setIsThemeModalOpened(false)
    setIsLanguageModalOpened(false)
  }

  return (
    <ModalContext.Provider
      value={{
        handleLanguageSelection,
        handleThemeSelection,
        handleCloseModals,
        handleLanguageModal,
        handleThemeModal,
        isLanguageModalOpened,
        isThemeModalOpened,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error('Modal Context must be used within a Modal Provider')
  }

  return context
}

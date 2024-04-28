import React, {
  SetStateAction,
  createContext,
  useState,
  PropsWithChildren,
  useContext,
} from 'react'
import { useTranslation } from 'react-i18next'

interface ModalContextData {
  isLanguageModalOpened: boolean
  setIsLanguageModalOpened: React.Dispatch<SetStateAction<boolean>>
  handleCloseLanguageModal: () => void
  handleLanguageSelection: (value: 'en' | 'pt') => void
}

const ModalContext = createContext({} as ModalContextData)

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const {
    i18n: { changeLanguage },
  } = useTranslation()

  const [isLanguageModalOpened, setIsLanguageModalOpened] = useState(false)

  const handleCloseLanguageModal = () => {
    setIsLanguageModalOpened(false)
  }

  const handleLanguageSelection = (value: 'en' | 'pt') => {
    changeLanguage(value)
    setIsLanguageModalOpened(false)
  }

  return (
    <ModalContext.Provider
      value={{
        handleCloseLanguageModal,
        handleLanguageSelection,
        isLanguageModalOpened,
        setIsLanguageModalOpened,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export function useLanguageModal() {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error(
      'Language Modal Context must be used within a Language Modal Provider',
    )
  }

  return context
}

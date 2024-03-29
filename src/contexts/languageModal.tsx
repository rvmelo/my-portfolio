import React, {
  SetStateAction,
  createContext,
  useState,
  PropsWithChildren,
  useContext,
} from 'react'
import { useTranslation } from 'react-i18next'

interface LanguageModalContextData {
  isModalOpened: boolean
  setIsModalOpened: React.Dispatch<SetStateAction<boolean>>
  handleCloseModal: () => void
  handleLanguageSelection: (value: 'en' | 'pt') => void
}

const LanguageModalContext = createContext({} as LanguageModalContextData)

export const LanguageModalProvider = ({ children }: PropsWithChildren) => {
  const {
    i18n: { changeLanguage },
  } = useTranslation()

  const [isModalOpened, setIsModalOpened] = useState(false)

  const handleCloseModal = () => {
    setIsModalOpened(false)
  }

  const handleLanguageSelection = (value: 'en' | 'pt') => {
    changeLanguage(value)
    setIsModalOpened(false)
  }

  return (
    <LanguageModalContext.Provider
      value={{
        handleCloseModal,
        handleLanguageSelection,
        isModalOpened,
        setIsModalOpened,
      }}
    >
      {children}
    </LanguageModalContext.Provider>
  )
}

export function useLanguageModal() {
  const context = useContext(LanguageModalContext)

  if (!context) {
    throw new Error(
      'Language Modal Context must be used within a Language Modal Provider',
    )
  }

  return context
}

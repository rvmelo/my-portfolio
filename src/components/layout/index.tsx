import React, { useState } from 'react'
import { Header } from '../header'
import { Footer } from '../footer'
import { useLanguageModal } from '../../contexts/languageModal'
import { LayoutContainer } from './styles'
import { HeaderModal } from '../headerModal'
import { MobileLanguageModal } from '../mobileLanguageModal'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { handleCloseModal } = useLanguageModal()

  const [isHeaderModalOpened, setIsHeaderModalOpened] = useState(false)

  const [isMobileLanguageModalOpened, setIsMobileLanguageModalOpened] =
    useState(false)

  const handleHeaderModal = (value: boolean) => {
    setIsHeaderModalOpened(value)
  }

  const handleMobileLanguageModal = (value: boolean) => {
    if (value) {
      setIsHeaderModalOpened(false)
    }
    setIsMobileLanguageModalOpened(value)
  }

  return (
    <LayoutContainer onClick={handleCloseModal}>
      <HeaderModal
        handleHeaderModal={handleHeaderModal}
        isHeaderModalOpened={isHeaderModalOpened}
        handleMobileLanguageModal={handleMobileLanguageModal}
      />
      <MobileLanguageModal
        isMobileLanguageModalOpened={isMobileLanguageModalOpened}
        handleMobileLanguageModal={handleMobileLanguageModal}
      />
      {!isHeaderModalOpened && (
        <>
          <Header handleHeaderModal={handleHeaderModal} />
          {children}
          <Footer />
        </>
      )}
    </LayoutContainer>
  )
}

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

  const [isHeaderMobileModalOpened, setIsHeaderMobileModalOpened] =
    useState(false)

  const [isMobileLanguageModalOpened, setIsMobileLanguageModalOpened] =
    useState(false)

  const handleMobileHeaderModal = (value: boolean) => {
    setIsHeaderMobileModalOpened(value)
  }

  const handleMobileLanguageModal = (value: boolean) => {
    if (value) {
      setIsHeaderMobileModalOpened(false)
    }
    setIsMobileLanguageModalOpened(value)
  }

  return (
    <LayoutContainer onClick={handleCloseModal}>
      <HeaderModal
        handleMobileHeaderModal={handleMobileHeaderModal}
        isHeaderMobileModalOpened={isHeaderMobileModalOpened}
        handleMobileLanguageModal={handleMobileLanguageModal}
      />
      <MobileLanguageModal
        isMobileLanguageModalOpened={isMobileLanguageModalOpened}
        handleMobileLanguageModal={handleMobileLanguageModal}
      />
      {!isHeaderMobileModalOpened && (
        <>
          <Header handleMobileHeaderModal={handleMobileHeaderModal} />
          {children}
          <Footer />
        </>
      )}
    </LayoutContainer>
  )
}

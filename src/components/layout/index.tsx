import React, { useState } from 'react'
import { Header } from '../header'
import { Footer } from '../footer'
import { useModal } from '../../contexts/modal'
import { LayoutContainer } from './styles'
import { HeaderMobileModal } from '../headerMobileModal'
import { MobileLanguageModal } from '../mobileLanguageModal'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { handleCloseModals } = useModal()

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
    <LayoutContainer onClick={handleCloseModals}>
      <HeaderMobileModal
        handleMobileHeaderModal={handleMobileHeaderModal}
        isHeaderMobileModalOpened={isHeaderMobileModalOpened}
        handleMobileLanguageModal={handleMobileLanguageModal}
      />
      <MobileLanguageModal
        isMobileLanguageModalOpened={isMobileLanguageModalOpened}
        handleMobileLanguageModal={handleMobileLanguageModal}
      />
      <>
        <Header handleMobileHeaderModal={handleMobileHeaderModal} />
        {children}
        <Footer />
      </>
    </LayoutContainer>
  )
}

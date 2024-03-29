import React from 'react'
import { Header } from '../header'
import { Footer } from '../footer'
import { useLanguageModal } from '../../contexts/languageModal'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { handleCloseModal } = useLanguageModal()

  return (
    <div onClick={handleCloseModal}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
import { ModalContainer } from './styles'

interface MobileLanguageModalProps {
  isMobileLanguageModalOpened: boolean
  handleMobileLanguageModal: (value: boolean) => void
}

export const MobileLanguageModal: React.FC<MobileLanguageModalProps> = ({
  isMobileLanguageModalOpened,
  handleMobileLanguageModal,
}) => {
  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation()

  const handleLanguageChange = (value: 'en' | 'pt') => {
    changeLanguage(value)
    handleMobileLanguageModal(false)
  }

  return (
    <ModalContainer
      data-state={isMobileLanguageModalOpened ? 'opened' : 'closed'}
    >
      <FontAwesomeIcon
        icon={faClose}
        onClick={() => handleMobileLanguageModal(false)}
      />

      <ul>
        <li onClick={() => handleLanguageChange('pt')}>{t('Portuguese')}</li>
        <li onClick={() => handleLanguageChange('en')}>{t('English')}</li>
      </ul>
    </ModalContainer>
  )
}

import React from 'react'
import { useTranslation } from 'react-i18next'
import { HeaderModalContainer } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { useScrollHandler } from '../../contexts/scrollHandler'

interface HeaderModalProps {
  isHeaderMobileModalOpened: boolean
  handleMobileHeaderModal: (value: boolean) => void
  handleMobileLanguageModal: (value: boolean) => void
}

export const HeaderMobileModal: React.FC<HeaderModalProps> = ({
  isHeaderMobileModalOpened,
  handleMobileHeaderModal,
  handleMobileLanguageModal,
}) => {
  const { t } = useTranslation()

  const { handleScroll, aboutRef, contactRef, introRef, portfolioRef } =
    useScrollHandler()

  const handleMobileScroll = (ref: React.RefObject<HTMLDivElement>) => {
    handleMobileHeaderModal(false)
    handleScroll(ref)
  }

  return (
    <HeaderModalContainer
      data-state={isHeaderMobileModalOpened ? 'opened' : 'closed'}
    >
      <FontAwesomeIcon
        icon={faClose}
        onClick={() => handleMobileHeaderModal(false)}
      />

      <ul>
        <li onClick={() => handleMobileScroll(introRef)}>{t('Home')}</li>
        <li onClick={() => handleMobileScroll(aboutRef)}>{t('About')}</li>
        <li onClick={() => handleMobileScroll(portfolioRef)}>
          {t('Projects')}
        </li>
        <li onClick={() => handleMobileScroll(contactRef)}>{t('Contact')}</li>
        <li
          onClick={(event) => {
            event.stopPropagation()
            handleMobileLanguageModal(true)
          }}
        >
          {t('Language')}
        </li>
      </ul>
    </HeaderModalContainer>
  )
}

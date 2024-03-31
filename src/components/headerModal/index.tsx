import React from 'react'
import { useTranslation } from 'react-i18next'
import { useLanguageModal } from '../../contexts/languageModal'
import { HeaderModalContainer } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

interface HeaderModalProps {
  isHeaderModalOpened: boolean
  handleHeaderModal: (value: boolean) => void
}

export const HeaderModal: React.FC<HeaderModalProps> = ({
  isHeaderModalOpened,
  handleHeaderModal,
}) => {
  const { t } = useTranslation()

  const { setIsModalOpened } = useLanguageModal()

  return (
    <HeaderModalContainer
      data-state={isHeaderModalOpened ? 'opened' : 'closed'}
    >
      <FontAwesomeIcon
        icon={faClose}
        onClick={() => handleHeaderModal(false)}
      />

      <ul>
        <li>{t('Home')}</li>
        <li>{t('About')}</li>
        <li>{t('Projects')}</li>
        <li>{t('Contact')}</li>
        <li
          onClick={(event) => {
            event.stopPropagation()
            setIsModalOpened((prev) => !prev)
          }}
        >
          {t('Language')}
        </li>
      </ul>
    </HeaderModalContainer>
  )
}

import React, { useEffect, useMemo, useState } from 'react'
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

export const HeaderModal: React.FC<HeaderModalProps> = ({
  isHeaderMobileModalOpened,
  handleMobileHeaderModal,
  handleMobileLanguageModal,
}) => {
  const { t } = useTranslation()

  const { handleScroll, aboutRef, contactRef, introRef, portfolioRef } =
    useScrollHandler()

  const scrollRefs = useMemo(
    () => ({
      aboutRef,
      contactRef,
      introRef,
      portfolioRef,
    }),
    [aboutRef, contactRef, introRef, portfolioRef],
  )

  const [selectedRef, setSelectedRef] = useState<keyof typeof scrollRefs>()

  const handleMobileScroll = (ref: keyof typeof scrollRefs) => {
    handleMobileHeaderModal(false)
    setSelectedRef(ref)
  }

  useEffect(() => {
    if (!isHeaderMobileModalOpened && selectedRef) {
      handleScroll(scrollRefs[selectedRef])
    }
  }, [isHeaderMobileModalOpened, handleScroll, scrollRefs, selectedRef])

  return (
    <HeaderModalContainer
      data-state={isHeaderMobileModalOpened ? 'opened' : 'closed'}
    >
      <FontAwesomeIcon
        icon={faClose}
        onClick={() => handleMobileHeaderModal(false)}
      />

      <ul>
        <li onClick={() => handleMobileScroll('introRef')}>{t('Home')}</li>
        <li onClick={() => handleMobileScroll('aboutRef')}>{t('About')}</li>
        <li onClick={() => handleMobileScroll('portfolioRef')}>
          {t('Projects')}
        </li>
        <li onClick={() => handleMobileScroll('contactRef')}>{t('Contact')}</li>
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

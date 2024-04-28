import React from 'react'
import {
  HeaderContainer,
  IconContainer,
  LanguageModalContainer,
  NavigationWrapper,
} from './styles'
import { useTranslation } from 'react-i18next'
import { useLanguageModal } from '../../contexts/modal'
import { useTheme } from 'styled-components'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useScrollHandler } from '../../contexts/scrollHandler'

interface HeaderProps {
  handleMobileHeaderModal: (value: boolean) => void
}

export const Header: React.FC<HeaderProps> = ({ handleMobileHeaderModal }) => {
  const { t } = useTranslation()

  const theme = useTheme()

  const {
    setIsLanguageModalOpened,
    isLanguageModalOpened,
    handleLanguageSelection,
  } = useLanguageModal()

  const { handleScroll, contactRef, aboutRef, introRef, portfolioRef } =
    useScrollHandler()

  return (
    <HeaderContainer>
      <span>rvtheone.dev</span>
      <NavigationWrapper>
        <nav>
          <ul>
            <li onClick={() => handleScroll(introRef)}>{t('Home')}</li>
            <li onClick={() => handleScroll(aboutRef)}>{t('About')}</li>
            <li onClick={() => handleScroll(portfolioRef)}>{t('Projects')}</li>
            <li onClick={() => handleScroll(contactRef)}>{t('Contact')}</li>
            <li
              onClick={(event) => {
                event.stopPropagation()
                setIsLanguageModalOpened((prev) => !prev)
              }}
            >
              {t('Language')}
            </li>
          </ul>
        </nav>

        <IconContainer>
          <FontAwesomeIcon
            icon={faBars}
            color={theme.colors.footerBackground}
            onClick={() => handleMobileHeaderModal(true)}
          />
        </IconContainer>

        <LanguageModalContainer
          data-state={isLanguageModalOpened ? 'opened' : 'closed'}
        >
          <ul>
            <li onClick={() => handleLanguageSelection('pt')}>
              {t('Portuguese')}
            </li>
            <li onClick={() => handleLanguageSelection('en')}>
              {t('English')}
            </li>
          </ul>
        </LanguageModalContainer>
      </NavigationWrapper>
    </HeaderContainer>
  )
}

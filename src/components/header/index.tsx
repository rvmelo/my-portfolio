import React from 'react'
import {
  HeaderContainer,
  IconContainer,
  LanguageModalContainer,
  NavigationWrapper,
  ThemeIconContainer,
  ThemeModalContainer,
} from './styles'
import { useTranslation } from 'react-i18next'
import { useModal } from '../../contexts/modal'
import { useTheme } from 'styled-components'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useScrollHandler } from '../../contexts/scrollHandler'
import { useUserTheme } from '../../contexts/theme'
import { CiDark } from 'react-icons/ci'
import { MdOutlineLightMode } from 'react-icons/md'

interface HeaderProps {
  handleMobileHeaderModal: (value: boolean) => void
}

export const Header: React.FC<HeaderProps> = ({ handleMobileHeaderModal }) => {
  const { t } = useTranslation()

  const theme = useTheme()

  const { userTheme } = useUserTheme()

  const {
    handleLanguageModal,
    handleThemeModal,
    isLanguageModalOpened,
    isThemeModalOpened,
    handleLanguageSelection,
    handleThemeSelection,
  } = useModal()

  const {
    handleScroll,
    contactRef,
    aboutRef,
    introRef,
    portfolioRef,
    headerRef,
  } = useScrollHandler()

  return (
    <HeaderContainer ref={headerRef}>
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
                const value = !isLanguageModalOpened
                handleLanguageModal(value)
              }}
            >
              {t('Language')}
            </li>
          </ul>
        </nav>

        <IconContainer>
          <FontAwesomeIcon
            icon={faBars}
            color={theme.colors.title}
            onClick={() => handleMobileHeaderModal(true)}
          />
        </IconContainer>

        <ThemeIconContainer
          onClick={(event) => {
            event.stopPropagation()
            const value = !isThemeModalOpened
            handleThemeModal(value)
          }}
        >
          {userTheme === 'light' ? (
            <MdOutlineLightMode className="light" />
          ) : (
            <CiDark className="dark" />
          )}
        </ThemeIconContainer>

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
        <ThemeModalContainer
          data-state={isThemeModalOpened ? 'opened' : 'closed'}
        >
          <ul>
            <li onClick={() => handleThemeSelection('light')}>{t('Light')}</li>
            <li onClick={() => handleThemeSelection('dark')}>{t('Dark')}</li>
            <li onClick={() => undefined}>{t('System')}</li>
          </ul>
        </ThemeModalContainer>
      </NavigationWrapper>
    </HeaderContainer>
  )
}

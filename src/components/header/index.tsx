import React from 'react'
import {
  HeaderContainer,
  LanguageModalContainer,
  NavigationWrapper,
} from './styles'
import { useTranslation } from 'react-i18next'
import { useLanguageModal } from '../../contexts/languageModal'

export const Header: React.FC = () => {
  const { t } = useTranslation()

  const { setIsModalOpened, isModalOpened, handleLanguageSelection } =
    useLanguageModal()

  return (
    <HeaderContainer>
      <span>rvtheone.dev</span>
      <NavigationWrapper>
        <nav>
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
        </nav>
        <LanguageModalContainer
          data-state={isModalOpened ? 'opened' : 'closed'}
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

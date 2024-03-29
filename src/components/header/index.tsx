import React from 'react'
import { HeaderContainer, NavigationWrapper } from './styles'
import { useTranslation } from 'react-i18next'

export const Header: React.FC = () => {
  const { t } = useTranslation()

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
          </ul>
        </nav>
      </NavigationWrapper>
    </HeaderContainer>
  )
}

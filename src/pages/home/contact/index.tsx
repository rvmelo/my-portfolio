import React from 'react'
import { ContentContainer } from '../../../components/styles'
import { faMailBulk, faMap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  ContactContainer,
  HeaderContainer,
  IconWrapper,
  ItemInfo,
  LocationContainer,
  LocationItem,
} from './styles'
import { useTranslation } from 'react-i18next'
import { useScrollHandler } from '../../../contexts/scrollHandler'
import { useUserTheme } from '../../../contexts/theme'

export const Contact: React.FC = () => {
  const { t } = useTranslation()

  const { contactRef } = useScrollHandler()

  const { userTheme } = useUserTheme()

  return (
    <ContentContainer ref={contactRef}>
      <ContactContainer>
        <HeaderContainer>
          <h2>{t('Contact').toUpperCase()}</h2>
          <h1>{t('ContactMessage')}</h1>
        </HeaderContainer>
        <LocationContainer>
          <LocationItem>
            <IconWrapper selectedTheme={userTheme}>
              <FontAwesomeIcon className="githubIcon" icon={faMap} />
            </IconWrapper>
            <ItemInfo>
              <h2>{t('Location')}</h2>
              <span>Aracaju, Brazil</span>
            </ItemInfo>
          </LocationItem>
          <LocationItem>
            <IconWrapper selectedTheme={userTheme}>
              <FontAwesomeIcon className="githubIcon" icon={faMailBulk} />
            </IconWrapper>
            <ItemInfo>
              <h2>{t('Mail')}</h2>
              <span>robertovmelo@gmail.com</span>
            </ItemInfo>
          </LocationItem>
        </LocationContainer>
      </ContactContainer>
    </ContentContainer>
  )
}

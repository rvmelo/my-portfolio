import React from 'react'
import { ContentContainer } from '../../../components/styles'
import { AboutContainer, InfoContainer } from './styles'

import remoteWorkPhoto from '../../../assets/remote-work.jpg'
import { useTranslation } from 'react-i18next'

export const About: React.FC = () => {
  const { t } = useTranslation()

  return (
    <ContentContainer>
      <AboutContainer>
        <img src={remoteWorkPhoto} alt="remote-work" />
        <InfoContainer>
          <span>{t('AboutMeLabel')}</span>
          <h1>{t('AboutMeTitle')}</h1>
          <p>{t('AboutMe')}</p>
        </InfoContainer>
      </AboutContainer>
    </ContentContainer>
  )
}

import React from 'react'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContentContainer } from '../../../components/styles'
import { useTranslation } from 'react-i18next'
import {
  InfoContainer,
  ProjectContainer,
  PortfolioContainer,
  StackContainer,
  ProjectInfo,
  LinkContainer,
} from './styles'
import finderBanner from '../../../assets/finder-banner.png'

export const Portfolio: React.FC = () => {
  const { t } = useTranslation()

  return (
    <PortfolioContainer>
      <ContentContainer>
        <h2>PORTFOLIO</h2>
        <h1 className="subtitle">{t('PortfolioSubtitle')}</h1>
        <ProjectContainer>
          <img src={finderBanner} alt="remote-work" />
          <ProjectInfo>
            <InfoContainer>
              <h1>{t('ProjectTitle')}</h1>
              <p>{t('ProjectDescription')}</p>
            </InfoContainer>
            <StackContainer>
              <span>React Native</span>
              <span>NodeJS</span>
            </StackContainer>
            <LinkContainer>
              <a
                href="https://play.google.com/store/apps/details?id=com.facetrack"
                target="_blank"
                rel="noreferrer"
              >
                Play Store
              </a>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </LinkContainer>
          </ProjectInfo>
        </ProjectContainer>
      </ContentContainer>
    </PortfolioContainer>
  )
}
import React from 'react'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { ContentContainer } from '../../../components/styles'
import { useTranslation } from 'react-i18next'
import {
  InfoContainer,
  ProjectContainer,
  PortfolioContainer,
  StackContainer,
  ProjectInfo,
  LinkContainer,
  LinksWrapper,
} from './styles'
import finderBanner from '../../../assets/finder-banner.png'
import masterProject from '../../../assets/detection-system.png'
import { useScrollHandler } from '../../../contexts/scrollHandler'

export const Portfolio: React.FC = () => {
  const { t } = useTranslation()

  const { portfolioRef } = useScrollHandler()

  return (
    <PortfolioContainer ref={portfolioRef}>
      <ContentContainer>
        <h2>PORTFOLIO</h2>
        <h1 className="subtitle">{t('PortfolioSubtitle')}</h1>
        <ProjectContainer imgBackgroundColor="black">
          <img src={finderBanner} alt="remote-work" />
          <ProjectInfo>
            <InfoContainer>
              <h1>{t('ProjectTitle')}</h1>
              <p>{t('ProjectDescription')}</p>
            </InfoContainer>
            <StackContainer>
              <span>React Native</span>
              <span>NodeJS</span>
              <span>AWS</span>
            </StackContainer>
            <LinkContainer
              href="https://play.google.com/store/apps/details?id=com.facetrack"
              target="_blank"
              rel="noreferrer"
            >
              <span>Play Store</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </LinkContainer>
          </ProjectInfo>
        </ProjectContainer>
        <ProjectContainer imgBackgroundColor="white">
          <ProjectInfo>
            <InfoContainer>
              <h1>MAIS-IDS</h1>
              <p>{t('MasterProjectDescription')}</p>
            </InfoContainer>
            <StackContainer>
              <span>{t('CLanguage')}</span>
              <span>AWS</span>
              <span>Kali Linux</span>
            </StackContainer>
            <LinkContainer
              href="https://ri.ufs.br/handle/riufs/10758"
              target="_blank"
              rel="noreferrer"
            >
              <span>{t('MasterThesis')}</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </LinkContainer>
            <LinksWrapper>
              <LinkContainer
                href="https://linktr.ee/rvtheone"
                target="_blank"
                rel="noreferrer"
              >
                <span>{t('Papers')}</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </LinkContainer>
              <LinkContainer
                href="https://github.com/rvmelo/Security-Model"
                target="_blank"
                rel="noreferrer"
              >
                <span>MAIS-IDS</span>
                <FontAwesomeIcon className="githubIcon" icon={faGithub} />
              </LinkContainer>
            </LinksWrapper>
          </ProjectInfo>
          <img src={masterProject} alt="detection-system" />
        </ProjectContainer>
      </ContentContainer>
    </PortfolioContainer>
  )
}

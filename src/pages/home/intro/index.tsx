import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useTheme } from 'styled-components'
import { ContentContainer } from '../../../components/styles'
import {
  IconWrapper,
  TechContainer,
  IntroContainer,
  IntroLeftSection,
  IntroContentWrapper,
  TechLogoContainer,
  TechTitleContainer,
} from './styles'
import { useTranslation } from 'react-i18next'

export const Intro: React.FC = () => {
  const theme = useTheme()

  const { t } = useTranslation()

  return (
    <IntroContainer>
      <ContentContainer>
        <IntroContentWrapper>
          <IntroLeftSection>
            <h1>{t('BioTitle')}</h1>
            <span className="bioText">{t('Bio')}</span>

            <IconWrapper>
              <a
                href="https://www.linkedin.com/in/roberto-melo-04a6a0158/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} color={theme.colors.title} />
              </a>
              <a
                href="https://github.com/rvmelo"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} color={theme.colors.title} />
              </a>
            </IconWrapper>
          </IntroLeftSection>
          <img
            className="profilePicture"
            src="https://i.imgur.com/AJgMkSp.jpg"
            alt=""
          />
        </IntroContentWrapper>
        <TechContainer>
          <TechTitleContainer>
            <span className="techText">Tech Stack</span>
            <span className="techText">|</span>
          </TechTitleContainer>
          <TechLogoContainer>
            <img src="https://skillicons.dev/icons?i=html,css" alt="html/css" />
            <img
              src="https://skillicons.dev/icons?i=js,ts"
              alt="javascript/typescript"
            />
            <img
              src="https://skillicons.dev/icons?i=react,next"
              alt="react/next/react-native"
            />
            <img
              src="https://skillicons.dev/icons?i=nodejs,aws"
              alt="nodejs/aws"
            />
            <img
              src="https://skillicons.dev/icons?i=postgres,mongodb"
              alt="postgres/mongodb"
            />
            <img
              src="https://skillicons.dev/icons?i=github,gitlab"
              alt="postgres/mongodb"
            />
            <img
              src="https://skillicons.dev/icons?i=githubactions"
              alt="github actions"
            />
            <img
              src="https://skillicons.dev/icons?i=tailwind,styledcomponents"
              alt="tailwind/styled components"
            />
          </TechLogoContainer>
        </TechContainer>
      </ContentContainer>
    </IntroContainer>
  )
}

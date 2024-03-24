import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useTheme } from 'styled-components'
import { ContentContainer } from '../styles'
import { FooterContainer, FooterContent, IconWrapper } from './styles'

export const Footer: React.FC = () => {
  const theme = useTheme()

  return (
    <FooterContainer>
      <ContentContainer>
        <FooterContent>
          <span>Copyright © 2024. All rights are reserved</span>
          <IconWrapper>
            <a
              href="https://www.linkedin.com/in/roberto-melo-04a6a0158/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                color={theme.colors.footerText}
              />
            </a>
            <a
              href="https://github.com/rvmelo"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                color={theme.colors.footerText}
              />
            </a>
          </IconWrapper>
        </FooterContent>
      </ContentContainer>
    </FooterContainer>
  )
}

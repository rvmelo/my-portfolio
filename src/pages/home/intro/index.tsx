import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useTheme } from 'styled-components'
import { ContentContainer } from '../../../components/styles'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import {
  IconWrapper,
  TechContainer,
  IntroContainer,
  IntroLeftSection,
  IntroContentWrapper,
  TechLogoContainer,
  TechTitleContainer,
  CVWrapper,
} from './styles'
import { useTranslation } from 'react-i18next'
import { useScrollHandler } from '../../../contexts/scrollHandler'

export const Intro: React.FC = () => {
  const theme = useTheme()

  const { introRef } = useScrollHandler()

  const { t } = useTranslation()

  // Baixa arquivo PDF
  const handleDownload = async () => {
    try {
      // URL do arquivo PDF -> alterar quando estiver em produção
      const pdfUrl = `${import.meta.env.VITE_BASE_URL}/resume.pdf`

      // Baixa o arquivo PDF
      const response = await fetch(pdfUrl)
      const blob = await response.blob()

      // Cria um link temporário para download do arquivo
      const url = window.URL.createObjectURL(new Blob([blob]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'resume.pdf')

      // Adiciona o link à página e simula o clique para iniciar o download
      document.body.appendChild(link)
      link.click()

      // Remove o link temporário da página
      document.body.removeChild(link)
    } catch (error) {
      console.error('Erro ao baixar o arquivo PDF:', error)
    }
  }

  return (
    <IntroContainer ref={introRef}>
      <ContentContainer>
        <IntroContentWrapper>
          <div className="mobileProfilePicture" />
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
              <CVWrapper>
                <span>CV</span>
                <div className="line" />
                <FontAwesomeIcon
                  onClick={handleDownload}
                  icon={faFileAlt}
                  color={theme.colors.title}
                />
              </CVWrapper>
            </IconWrapper>
          </IntroLeftSection>
          <div className="profilePicture" />
        </IntroContentWrapper>
        <TechContainer>
          <TechTitleContainer>
            <span className="techText">Tech Stack</span>
            <div className="underline" />
            <div className="mobileUnderline" />
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

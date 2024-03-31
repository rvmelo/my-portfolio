import React from 'react'
import { ContentContainer } from '../../../components/styles'
import { AboutContainer, InfoContainer } from './styles'

import remoteWorkPhoto from '../../../assets/remote-work.jpg'

export const About: React.FC = () => {
  return (
    <ContentContainer>
      <AboutContainer>
        <img src={remoteWorkPhoto} alt="remote-work" />
        <InfoContainer>
          <span>ABOUT ME</span>
          <h1>FullStack Developer based in Aracaju, Brazil 📍</h1>
          <p>
            Hey, my name is Roberto, and I am a Frontend Developer. My passion
            is to create and develop a clean UI/UX for my users. My main stack
            currently is React/Next.js in combination with Tailwind CSS and
            TypeScript.
          </p>
        </InfoContainer>
      </AboutContainer>
    </ContentContainer>
  )
}

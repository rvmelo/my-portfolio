import styled, { keyframes } from 'styled-components'
import profilePicture from '../../../assets/eu.jpg'
import glitchPicture01 from '../../../assets/eu-glitch-01.png'
import glitchPicture02 from '../../../assets/eu-glitch-02.png'
import glitchPicture03 from '../../../assets/eu-glitch-03.png'

export const IntroContainer = styled.div`
  padding: 3rem 0;
`

const GlitchAnimation = keyframes`
    0% {
      background: url(${profilePicture});
      background-size: cover;
    }

    100% {
      background: url(${profilePicture});
      background-size: cover;
    }

    92.5% {
      background: url(${glitchPicture01});
      background-size: cover;
      opacity: 1;
    }

    95% {
      background: url(${glitchPicture02});
      background-size: cover;
      opacity: 0;
    }

    97.5% {
      background: url(${glitchPicture03});
      background-size: cover;
      opacity: 1;
    }
`

export const IntroContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 6rem;

  margin-bottom: 2rem;

  width: 100%;

  .profilePicture {
    min-width: 18.75rem;
    min-height: 18.75rem;
    border-radius: 100%;
    background: purple;
    background-image: url(${profilePicture});
    background-size: cover;
    animation: ${GlitchAnimation} 3.5s infinite steps(1);
  }
`

export const IntroLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  h1 {
    font-size: ${({ theme }) => theme.fonts.lg};
  }

  .bioText {
    color: ${({ theme }) => theme.colors.text2};
  }
`

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 0.75rem;

  svg {
    width: 1.6rem;
    height: 1.6rem;
    cursor: pointer;
    transition: color 0.23s ease-in-out;
  }

  svg:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const TechContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 0.75rem;

  margin-top: 4rem;
`

export const TechTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 1.5rem;

  margin-right: 3rem;

  .techText {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.title};
    white-space: nowrap;
  }
`

export const TechLogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center=;
  gap: 2rem;

  img {
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: translateY(-10px);
  }
`

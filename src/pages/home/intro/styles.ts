import styled, { keyframes } from 'styled-components'
import profilePicture from '../../../assets/eu.jpg'
import glitchPicture01 from '../../../assets/eu-glitch-01.png'
import glitchPicture02 from '../../../assets/eu-glitch-02.png'
import glitchPicture03 from '../../../assets/eu-glitch-03.png'

import linkedinPicture from '../../../assets/eu-linkedin.jpg'

export const IntroContainer = styled.div`
  background: ${({ theme }) => theme.colors.background2};
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

const MorphAnimation = keyframes`
    0% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }

    50% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }

    100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
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

  .mobileProfilePicture {
    display: none;
  }

  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    .mobileProfilePicture {
      display: inline;
      min-width: 15rem;
      min-height: 15rem;
      /* border-radius: 100%; */
      /* background-image: url(${profilePicture}); */
      border: 3px solid ${({ theme }) => theme.colors.title};
      background-image: url(${linkedinPicture});
      background-size: cover;
      /* animation: ${GlitchAnimation} 3.5s infinite steps(1); */
      animation: ${MorphAnimation} 8s ease-in-out infinite;
    }
  }

  .profilePicture {
    min-width: 18.75rem;
    min-height: 18.75rem;
    border: 3px solid ${({ theme }) => theme.colors.title};
    /* border-radius: 100%; */
    /* background-image: url(${profilePicture}); */
    background-image: url(${linkedinPicture});
    background-size: cover;
    /* animation: ${GlitchAnimation} 3.5s infinite steps(1); */
    animation: ${MorphAnimation} 8s ease-in-out infinite;

    @media (max-width: 950px) {
      display: none;
    }
  }
`

export const IntroLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 950px) {
    align-items: center;
  }

  h1 {
    font-size: ${({ theme }) => theme.fonts.lg};

    @media (max-width: 950px) {
      font-size: 2rem;
      text-align: center;
    }
  }

  .bioText {
    color: ${({ theme }) => theme.colors.text2};
    line-height: 1.6;

    @media (max-width: 950px) {
      text-align: center;
    }
  }
`

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 0.75rem;

  @media (max-width: 950px) {
    margin-top: 1.2rem;
  }

  svg {
    width: 1.8rem;
    height: 1.8rem;
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

  @media (max-width: 950px) {
    flex-direction: column;
    gap: 2rem;
  }
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

  .underline {
    width: 1px;
    height: 1.5rem;
    border: solid 1px ${({ theme }) => theme.colors.text};
  }

  .mobileUnderline {
    display: none;
  }

  @media (max-width: 950px) {
    flex-direction: column;
    gap: 0.5rem;

    margin-right: 0;

    .underline {
      display: none;
    }

    .mobileUnderline {
      display: inline;
      height: 1px;
      width: 5.7rem;
      border: solid 1px ${({ theme }) => theme.colors.text};
    }
  }
`

export const TechLogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  @media (max-width: 950px) {
    justify-content: center;
  }

  img {
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: translateY(-10px);
  }
`

export const CVWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  margin-left: 1rem;

  svg:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    width: 1rem;
    height: 2rem;
    cursor: pointer;
    transition: color 0.23s ease-in-out;
  }

  span {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.title};
    white-space: nowrap;
  }

  .line {
    width: 1px;
    height: 1.5rem;
    border: solid 1px ${({ theme }) => theme.colors.text};
  }
`

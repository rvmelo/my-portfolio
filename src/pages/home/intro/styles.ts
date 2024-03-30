import styled from 'styled-components'

export const IntroContainer = styled.div`
  padding: 3rem 0;
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
    width: 18.75rem;
    height: 18.75rem;
    border-radius: 100%;
    object-fit: cover;
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

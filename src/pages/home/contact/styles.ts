import styled from 'styled-components'

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 65vw;
  width: 100%;

  margin: 0 auto;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fonts.m};
    font-weight: 700;
  }

  h1 {
    color: ${({ theme }) => theme.colors.title};
    font-size: ${({ theme }) => theme.fonts.m2};
    font-weight: 700;
  }

  @media (max-width: 950px) {
    h2 {
      text-align: center;
    }

    h1 {
      text-align: center;
    }
  }
`

export const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`

export const LocationItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  @media (max-width: 950px) {
    flex-direction: column;

    h2 {
      text-align: center;
    }

    span {
      text-align: center;
    }
  }
`

interface IconWrapperProps {
  selectedTheme: 'light' | 'dark'
}

export const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 100%;

  background: ${({ theme }) => theme.colors.background};

  box-shadow: 0 1px 10px
    ${({ selectedTheme }) =>
      selectedTheme === 'light'
        ? 'rgba(0, 0, 0, 0.09)'
        : 'rgba(255, 255, 255, 0.15)'};
  position: relative;

  width: 3rem;
  height: 3rem;

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const ItemInfo = styled.div`
  h2 {
    color: ${({ theme }) => theme.colors.title};
    font-size: ${({ theme }) => theme.fonts.m};
    font-weight: 700;
  }

  span {
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fonts.m};
    font-weight: 400;
  }
`

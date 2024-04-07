import styled from 'styled-components'

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5rem;

  width: 100%;

  img {
    width: 100%;
    object-fit: contain;
    border-radius: 8px;
    overflow: hidden;
    background: black;
    padding: 0.5rem;
  }

  @media (max-width: 950px) {
    img {
      max-width: 30rem;
      max-height: 30rem;
      width: 100%;
      height: 100%;
    }

    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: ${({ theme }) => theme.fonts.m};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
  }

  h1 {
    font-size: ${({ theme }) => theme.fonts.m3};
    color: ${({ theme }) => theme.colors.title};
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
    line-height: 1.7;
    text-align: center;
  }

  @media (max-width: 950px) {
    align-items: center;

    h1 {
      text-align: center;
      margin-bottom: 1rem;
    }

    p {
      text-align: center;
    }
  }
`

export const PortfolioContainer = styled.div`
  h2 {
    font-size: ${({ theme }) => theme.fonts.m};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    font-size: ${({ theme }) => theme.fonts.m2};
    color: ${({ theme }) => theme.colors.title};
    font-weight: 700;
    margin-bottom: 4rem;
  }

  width: 100%;
  background: ${({ theme }) => theme.colors.background2};

  @media (max-width: 950px) {
    h2 {
      text-align: center;
    }

    .subtitle {
      text-align: center;
    }
  }
`

export const StackContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.3rem;

  margin-top: 2rem;

  span {
    font-size: ${({ theme }) => theme.fonts.m};
    color: ${({ theme }) => theme.colors.title};
    font-weight: 700;
  }
`

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  margin-top: 0.5rem;

  a {
    font-size: ${({ theme }) => theme.fonts.m};
    text-decoration: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.title};
    font-weight: 700;
  }

  svg {
    color: ${({ theme }) => theme.colors.title};
  }
`

import styled from 'styled-components'

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 9rem;

  width: 100%;

  img {
    width: 23rem;
    height: 23rem;
    object-fit: cover;
    border-radius: 8px;
  }

  @media (max-width: 950px) {
    img {
      max-width: 18.75rem;
      max-height: 18.75rem;
      width: 100%;
      height: 100%;
    }

    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span {
    font-size: ${({ theme }) => theme.fonts.m};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
  }

  h1 {
    font-size: ${({ theme }) => theme.fonts.m3};
    color: ${({ theme }) => theme.colors.title};
    font-weight: 700;
    margin: 0.75rem 0 2rem 0;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
    line-height: 1.7;
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

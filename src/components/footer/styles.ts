import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 3.8rem 0;
  background: ${({ theme }) => theme.colors.footerBackground};
`

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 950px) {
    flex-direction: column;
    gap: 2rem;
  }

  span {
    color: ${({ theme }) => theme.colors.footerText};
    font-size: ${({ theme }) => theme.fonts.m};
    font-weight: 600;
  }

  svg {
    width: 1.6rem;
    height: 1.6rem;
    cursor: pointer;
    transition: all 0.23s ease-in-out;
  }

  svg:hover {
    transform: scale(1.2);
  }
`

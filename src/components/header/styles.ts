import styled from 'styled-components'

export const HeaderContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 25px 40px 25px 50px;

  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.09);

  position: sticky;
  top: 0;
  z-index: 999;
  background: ${({ theme }) => theme.colors.background};

  span {
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
  }

  span:hover {
    color: ${({ theme }) => theme.colors.primary};
    transition: color 0.23s;
  }
`

export const NavigationWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  nav ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  }

  nav ul li {
    font-weight: 600;
    cursor: pointer;
  }

  nav ul li:hover {
    color: ${({ theme }) => theme.colors.primary};
    transition: color 0.23s;
  }

  @media (max-width: 950px) {
    nav {
      display: none;
    }
  }
`

export const IconContainer = styled.div`
  display: none;
  @media (max-width: 950px) {
    cursor: pointer;
    display: inline;

    svg {
      height: 1.2rem;
      width: 1.2rem;
    }
  }
`

export const LanguageModalContainer = styled.div`
  position: absolute;
  border-radius: 8px;
  top: 60px;
  right: 1rem;
  overflow: hidden;

  &[data-state='opened'] {
    transition: opacity 0.23s;
    opacity: 1;
  }

  &[data-state='closed'] {
    display: none;
    transition: opacity 0.23s;
    opacity: 0;
  }

  background: ${({ theme }) => theme.colors.background};

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;

    cursor: pointer;
    font-size: ${({ theme }) => theme.fonts.sm};
    font-weight: 600;
    padding: 8px 30px;
  }

  li:hover {
    background: rgb(34, 197, 94, 0.3);
    transition: all 0.23s;
  }
`

export const ThemeModalContainer = styled(LanguageModalContainer)`
  right: -30px;
`

export const ThemeIconContainer = styled.div`
  width: 2rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  .light {
    height: 1.7rem;
    width: 1.7rem;
    color: ${({ theme }) => theme.colors.title};
  }

  .dark {
    height: 1.7rem;
    width: 1.7rem;
    color: ${({ theme }) => theme.colors.title};
    margin-bottom: 3px;
  }

  cursor: pointer;

  border-radius: 8px;

  /* transition: all 0.23s;

  &:hover {
    background: ${({ theme }) => theme.colors.background2};
  } */
`

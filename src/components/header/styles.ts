import styled from 'styled-components'

export const HeaderContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 25px 40px 25px 50px;

  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.09);
  position: relative;

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
`

export const LanguageModalContainer = styled.div`
  position: absolute;
  border-radius: 8px;
  top: 60px;
  right: -30px;
  overflow: hidden;

  &[data-state='opened'] {
    transition: opacity 0.23s;
    opacity: 1;
  }

  &[data-state='closed'] {
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
    background: rgb(20, 126, 251, 0.3);
    transition: all 0.23s;
  }
`

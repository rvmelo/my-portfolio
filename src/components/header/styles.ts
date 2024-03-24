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

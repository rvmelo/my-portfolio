import styled from 'styled-components'

export const HeaderModalContainer = styled.div`
  display: none;

  @media (max-width: 950px) {
    display: flex;
    height: 100vh;
    width: 100vw;

    justify-content: center;
    align-items: center;

    z-index: 999;

    background: ${({ theme }) => theme.colors.background};

    position: absolute;

    transition: all 0.3s ease;

    &[data-state='opened'] {
      transform: translateX(0);
    }

    &[data-state='closed'] {
      transform: translateX(-100vw);
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    ul li {
      font-size: 1.3rem;
      font-weight: 600;
    }

    svg {
      cursor: pointer;
      position: absolute;
      top: 1rem;
      right: 1rem;

      height: 1.5rem;
      width: 1.5rem;
    }
  }
`

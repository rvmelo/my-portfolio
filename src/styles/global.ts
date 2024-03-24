import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.title};
}

body {
    background-color:${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.title};
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font: 400 1rem Poppins, sans-serif;
}

`

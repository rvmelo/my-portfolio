import styled from 'styled-components'

export const LayoutContainer = styled.div`
  position: relative;
  height: 100vh;

  &[data-state='hidden'] {
    overflow: hidden;
  }

  &[data-state='auto'] {
    overflow: auto;
  }
`

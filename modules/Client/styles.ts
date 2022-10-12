import styled from 'styled-components'

export const Center = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction column;
    align-items: center;
    justify-content: center;
`

export const Toolbar = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0px 16px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.sm}px) {
    padding: 0;
  }
`

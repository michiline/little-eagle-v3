import styled from 'styled-components'

export const StyledLatestGalleries = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 96px 16px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.sm}px) {
    padding: 48px 16px;
  }
`

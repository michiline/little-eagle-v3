import styled from 'styled-components'

export const StyledTestimonials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 960px;
  padding: 96px 16px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
    max-width: 475px;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: ${p => p.theme.breakpoints.sm}px) {
    padding: 48px 16px;
  }
`

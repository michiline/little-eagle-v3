import styled from 'styled-components'
import { ContainerProps } from './Container'

export const StyledContainer = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${p => {
    switch (p.backgroundColor) {
      case 'primary':
        return `${p.theme.colors.background.primary}`
      case 'secondary':
        return `${p.theme.colors.background.secondary}`
      case 'tertiary':
        return `${p.theme.colors.background.tertiary}`
      default:
        return `${p.theme.colors.background.primary}`
    }
  }};
  padding: 72px 8px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.lg}px) {
    padding: 48px 8px;
  }
`

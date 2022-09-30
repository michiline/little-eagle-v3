import styled, { css } from 'styled-components'
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
      case 'footer':
        return `${p.theme.colors.footer}`
      default:
        return `${p.theme.colors.background.primary}`
    }
  }};
  ${p =>
    p.minHeight &&
    css`
      padding-top: calc(96px);
      min-height: calc(100vh - 370px);
      @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
        padding-top: calc(64px);
      }
    `}
`

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
  padding-top: 72px;
  padding-bottom: 72px;
  padding-left: 16px;
  padding-right: 16px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
    padding-top: 48px;
    padding-bottom: 48px;
    padding-left: 8px;
    padding-right: 8px;
  }
  ${p =>
    p.minHeight &&
    css`
      padding-top: calc(96px + 32px);
      padding-bottom: 32px;
      min-height: calc(100vh - 347.367px);
      @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
        padding-top: calc(64px + 8px);
        padding-bottom: 8px;
        min-height: 0;
      }
    `}
  ${p =>
    p.minimal &&
    css`
      @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
        padding-left: 2px;
        padding-right: 2px;
      }
    `}
`

export const StyledMinHeightContainer = styled(StyledContainer)``

import Typography from 'components/Typography'
import styled, { css } from 'styled-components'

interface StyledHeaderProps {
  isScrolled: boolean
}

export const StyledHeader = styled.div<StyledHeaderProps>`
  position: fixed;
  height: 96px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
    height: 64px;
  }
  transition-property: background, box-shadow;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
  background: ${p => (p.isScrolled ? p.theme.colors.background.primary : 'none')};
`

export const TitleWrap = styled.div`
  display: flex;
`

export const TitleLarge = styled(Typography)`
  @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
    display: none;
  }
`

export const TitleSmall = styled(Typography)`
  @media only screen and (min-width: ${p => p.theme.breakpoints.md + 1}px) {
    display: none;
  }
`

export const MenuIconPlaceholder = styled.div`
  width: 48px;
  height: 48px;
`

import styled from 'styled-components'

interface StyledHeaderProps {
  isScrolled: boolean
  show: boolean
}

export const StyledHeader = styled.div<StyledHeaderProps>`
  position: fixed;
  height: 96px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
    padding: 0 24px;
    height: 64px;
  }
  transition-property: background, box-shadow;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
  background: ${p => (p.isScrolled && p.show ? p.theme.colors.background.primary : 'none')};
`

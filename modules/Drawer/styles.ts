import styled from 'styled-components'

export const Backdrop = styled.div<{ isOpen: boolean; onClick: () => void }>`
  width: 100%;
  height: 100%;
  background: linear-gradient(182.59deg, rgba(96, 84, 84, 0.8) 2.1%, rgba(156, 108, 105, 0.6) 97.84%);
  transition-property: opacity, visibility;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  ${p =>
    p.isOpen &&
    `
    opacity: 1;
    z-index: 10;
    visibility: visible;
  `}
`

export const MenuIcon = styled.div`
  top: 24px;
  right: 8px;
  position: fixed;
  width: 48px;
  height: 48px;
  z-index: 11;
  @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
    top: 8px;
  }
`

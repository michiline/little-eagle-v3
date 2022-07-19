import { IconGalleryBack, IconGalleryClose, IconGalleryForward } from 'components/Icons'
import styled, { css } from 'styled-components'

export const StyledGalleryFull = styled.div<{ show: boolean }>`
  top: 0;
  position: fixed;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  z-index: 1000;
  visibility: hidden;
  opacity: 0;
  transition-property: opacity, visibility;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  ${p =>
    p.show &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`

export const Center = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const FullScreenImg = styled.img`
  max-height: calc(100vh);
  max-width: calc(100vw);
  height: auto;
  width: 100%:
  object-fit: cover;
`

export const CloseIcon = styled(IconGalleryClose)`
  top: 8px;
  right: 16px;
  position: fixed;
  opacity: 0.8;
  transition-property: opacity;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    opacity: 1;
  }
`

export const BackIcon = styled(IconGalleryBack)`
  top: calc(50vh - 24px);
  left: 16px;
  position: fixed;
  opacity: 0.8;
  transition-property: opacity;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    opacity: 1;
  }
`

export const ForwardIcon = styled(IconGalleryForward)`
  top: calc(50vh - 24px);
  right: 16px;
  position: fixed;
  opacity: 0.8;
  transition-property: opacity;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    opacity: 1;
  }
`

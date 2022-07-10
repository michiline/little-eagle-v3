import styled from 'styled-components'

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 32px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
    padding-bottom: 0;
  }
`

export const SlideshowText = styled.div`
  margin-top: 24px;
  flex: 1;
  position: relative;
`

interface SlideshowItemProps {
  first: boolean
  active: boolean
}

export const SlideshowBody = styled.div<SlideshowItemProps>`
  width: 100%;
  height: 100%;
  position: ${p => (p.first ? 'relative' : 'absolute')};
  top: 0;
  opacity: ${p => (p.active ? 1 : 0)};
  visibility: ${p => (p.active ? 'visible' : 'hidden')};
  transition-property: opacity;
  transition-duration: 1000ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`

export const ImageColumn = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-left: 32px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
    margin-left: 0;
    width: 100%;
    margin-top: 32px;
  }
`

export const Image = styled.img<SlideshowItemProps>`
  position: ${p => (p.first ? 'relative' : 'absolute')};
  width: 100%;
  padding: 32px;
  border: 3px solid ${p => p.theme.colors.text.primary};
  opacity: ${p => (p.active ? 1 : 0)};
  @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
    padding: 16px;
  }
  transition-property: opacity;
  transition-duration: 1000ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`

export const SlideshowPicker = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 300px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
    margin-top: 48px;
    max-width: 100%;
  }
`

export const CircleButton = styled.button<{ active: boolean }>`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  padding: 8px;
  background-color: ${p => (p.active ? p.theme.colors.text.primary : p.theme.colors.background.tertiary)};
  border: none;
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 1000ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
    margin-top: 16px;
  }
`

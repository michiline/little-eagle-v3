import { AboutLogo } from 'components/Images'
import styled from 'styled-components'

export const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 960px;
`

export const Row = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  @media only screen and (max-width: ${p => p.theme.breakpoints.lg}px) {
    flex-direction: column;
    max-width: 475px;
    margin-top: 0;
  }
  align-items: center;
  justify-content: space-between;
  padding: 48px 16px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.sm}px) {
    padding: 24px 16px;
  }
`

export const ImageColumn = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  width: 100%;
`

export const SecondImageColumn = styled(ImageColumn)`
  @media only screen and (min-width: ${p => p.theme.breakpoints.lg + 1}px) {
    margin-left: 48px;
  }
  @media only screen and (max-width: ${p => p.theme.breakpoints.lg}px) {
    margin-top: 24px;
  }
`

export const Image = styled.img`
  width: 100%;
  height: auto;
  z-index: 2;
  object-fit: cover;
`

export const ImageFrame = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
  width: 100%;
  height: 100%;
  border: 3px solid ${p => p.theme.colors.text.primary};
  @media only screen and (max-width: ${p => p.theme.breakpoints.sm}px) {
    display: none;
  }
`

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media only screen and (max-width: ${p => p.theme.breakpoints.lg}px) {
    margin-top: 48px;
  }
`

export const FirstTextColumn = styled(TextColumn)`
  @media only screen and (min-width: ${p => p.theme.breakpoints.lg + 1}px) {
    margin-left: 64px;
  }
`

export const AboutLogoHide = styled(AboutLogo)`
  @media only screen and (max-width: ${p => p.theme.breakpoints.lg}px) {
    display: none;
  }
`

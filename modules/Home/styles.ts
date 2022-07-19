import Typography from 'components/Typography'
import styled from 'styled-components'

export const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Subtitle = styled(Typography)`
  width: 100%;
  text-align: center;
`

export const LatestGalleries = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Testimonials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 960px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
    max-width: 475px;
    flex-direction: column;
    align-items: center;
  }
`

export const About = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 960px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
    max-width: 475px;
    flex-direction: column;
    align-items: center;
  }
`

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-left: 80px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
    margin-top: 56px;
    margin-left: 0;
  }
`

export const AboutBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 24px;
`

export const ImageColumn = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  width: 100%;

  @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
    width: 100%;
  }
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

interface CanvasProps {
  url: string
}

export const Canvas = styled.div<CanvasProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 960px;
  @media only screen and (min-width: ${p => p.theme.breakpoints.lg + 1}px) {
    background-image: url(${p => p.url});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 700px;
    margin-top: 48px;
    padding-top: 80px;
  }
  @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
    flex-direction: column;
    align-items: center;
  }
`

export const CanvasCenter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: ${p => p.theme.breakpoints.lg + 1}px) {
    max-width: 575px;
  }
`

import Typography from 'components/Typography'
import styled from 'styled-components'

interface CanvasProps {
  url: string
}

export const StyledCanvas = styled.div<CanvasProps>`
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
    margin-bottom: 96px;
  }
  @media only screen and (max-width: ${p => p.theme.breakpoints.lg}px) {
    padding: 96px 16px;
  }
  @media only screen and (max-width: ${p => p.theme.breakpoints.sm}px) {
    padding: 48px 16px;
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
  @media only screen and (max-width: ${p => p.theme.breakpoints.lg}px) {
    margin-top: 24px;
  }
`

export const CanvasTitle = styled(Typography)`
  @media only screen and (min-width: ${p => p.theme.breakpoints.lg + 1}px) {
    display: none;
  }
`

import Button from 'components/Button'
import Typography from 'components/Typography'
import styled from 'styled-components'

export const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Title = styled(Typography)``

export const Subtitle = styled(Typography)`
  width: 100%;
  text-align: center;
`

export const GalleryButton = styled(Button)`
  margin-top: 48px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.lg}px) {
    margin-top 32px;
  }
`

export const LatestPhotoshoots = styled.div`
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
    flex-direction: column;
    align-items: center;
  }
`

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
  margin-top: 24px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
    margin-top 16px;
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

import Typography from 'components/Typography'
import styled from 'styled-components'

export const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const CoverCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 96px 16px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
    width: 100%:
  }
`

export const Subtitle = styled(Typography)`
  width: 100%;
  text-align: center;
  margin-top: 16px;
`

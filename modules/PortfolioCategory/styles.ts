import Typography from 'components/Typography'
import styled from 'styled-components'

export const StyledPortfolioCategory = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const Text = styled.div`
  width: 100%;
  display: flex;
  padding: 0 16px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.lg}px) {
    flex-direction: column;
  }
`

export const SecondParagraph = styled(Typography)`
  margin-left: 16px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.lg}px) {
    margin-left: 0px;
    margin-top: 16px;
  }
`

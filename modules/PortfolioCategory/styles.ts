import Typography from 'components/Typography'
import styled from 'styled-components'

export const StyledPortfolioCategory = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 48px 16px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.sm}px) {
    padding: 24px 16px;
  }
`

export const Center = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 48px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.sm}px) {
    padding-bottom: 24px;
  }
`

export const Text = styled.div`
  width: 100%;
  display: flex;
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

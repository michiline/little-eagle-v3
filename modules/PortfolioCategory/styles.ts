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
  padding-bottom: 96px;
`

export const Text = styled.div`
  width: 100%;
  display: flex;
  margin-top: 24px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.lg}px) {
    flex-direction: column;
  }
`

export const FirstParagraph = styled(Typography)`
  width: 50%;
  @media only screen and (max-width: ${p => p.theme.breakpoints.lg}px) {
    width: 100%;
  }
`

export const SecondParagraph = styled(Typography)`
  width: 50%;
  margin-left: 16px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.lg}px) {
    width: 100%;
    margin-left: 0px;
    margin-top: 16px;
  }
`

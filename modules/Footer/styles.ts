import Typography from 'components/Typography'
import styled from 'styled-components'

export const StyledFooter = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 72px;
  padding-bottom: 32px;
  padding-left: 16px;
  padding-right: 16px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.sm}px) {
    padding-top: 48px;
    padding-bottom: 24px;
  }
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: ${p => p.theme.breakpoints.sm}px) {
    justify-content: center;
    flex-direction: column;
  }
`

export const Socials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
`

export const Contact = styled.div`
  display: flex;
  align-items: center;
`
export const Links = styled.div`
  display: flex;
  flex-direction: row;
`

export const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  &:first-of-type {
    margin-left: 0;
  }
`

export const LinksGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const FooterLink = styled(Typography)`
  width: 100%;
  padding: 8px 0;
`

export const Copyright = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`

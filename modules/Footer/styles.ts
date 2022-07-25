import Typography from 'components/Typography'
import styled from 'styled-components'

export const StyledFooter = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 72px 16px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.sm}px) {
    justify-content: center;
    flex-direction: column;
    padding: 48px 16px;
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

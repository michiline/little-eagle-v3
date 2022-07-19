import { FooterLogo } from 'components/Images'
import styled from 'styled-components'

export const StyledFooter = styled.div`
  width: 100%;
  max-width: 960px;
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

export const NavLink = styled.div`
  font-family: ${p => p.theme.typography.family.secondary};
  font-size: ${p => p.theme.typography.size.Body}px;
  line-height: 1.5em;
  color: ${p => p.theme.colors.background.primary};
  text-decoration: none;
  width: 100%;
  text-align: start;
  padding-top: 8px;
  padding-bottom: 8px;
`

export const FooterLogoWrap = styled.div`
  @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
    margin-top: 24px;
  }
`

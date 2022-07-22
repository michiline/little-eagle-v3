import Container from 'components/Container'
import { SocialIcons } from 'components/Icons'
import { FooterLogo } from 'components/Images'
import NavLink from 'components/NavLink'
import Typography from 'components/Typography'
import { FormattedMessage } from 'react-intl'
import { email } from 'utils/const'
import { Contact, StyledFooter, Links, LinksColumn, LinksGroup, Socials, FooterLink } from './styles'

const Footer = () => {
  return (
    <Container backgroundColor="footer">
      <StyledFooter>
        <Links>
          <LinksColumn>
            <Typography variant="h4" color="footer">
              <FormattedMessage id={'footer.title.1'} />
            </Typography>
            <LinksGroup>
              <NavLink href="/about" fullWidth={true} style={{ marginTop: '8px' }}>
                <FooterLink color="footer">
                  <FormattedMessage id="footer.about" />
                </FooterLink>
              </NavLink>
              <NavLink href="/portfolio" fullWidth={true}>
                <FooterLink color="footer">
                  <FormattedMessage id="footer.gallery" />
                </FooterLink>
              </NavLink>
            </LinksGroup>
          </LinksColumn>
          <LinksColumn>
            <Typography variant="h4" color="footer">
              <FormattedMessage id={'footer.title.2'} />
            </Typography>
            <LinksGroup>
              <NavLink href="/portfolio/weddings" fullWidth={true} style={{ marginTop: '8px' }}>
                <FooterLink color="footer">
                  <FormattedMessage id="footer.weddings" />
                </FooterLink>
              </NavLink>
              <NavLink href="/portfolio/portraits" fullWidth={true}>
                <FooterLink color="footer">
                  <FormattedMessage id="footer.portraits" />
                </FooterLink>
              </NavLink>
              <NavLink href="/portfolio/events" fullWidth={true}>
                <FooterLink color="footer">
                  <FormattedMessage id="footer.events" />
                </FooterLink>
              </NavLink>
            </LinksGroup>
          </LinksColumn>
        </Links>
        <Socials>
          <FooterLogo />
          <Contact>
            <SocialIcons color={'dark'} />
            <Typography variant="caption" style={{ marginLeft: '8px' }}>
              {email}
            </Typography>
          </Contact>
        </Socials>
      </StyledFooter>
    </Container>
  )
}

export default Footer

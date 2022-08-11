import Container from 'components/Container'
import { SocialIcons } from 'components/Icons'
import NavLink from 'components/NavLink'
import Typography from 'components/Typography'
import Image from 'next/image'
import { FormattedMessage } from 'react-intl'
import { copyright, email, FooterLogo } from 'utils/const'
import { Contact, StyledFooter, Links, LinksColumn, LinksGroup, Socials, FooterLink, Copyright, Row } from './styles'

const Footer = () => {
  return (
    <Container backgroundColor="footer">
      <StyledFooter>
        <Row>
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
            <Image src={FooterLogo} width={191} height={150} alt="Bird over a camera logo" />
            <Contact>
              <SocialIcons color={'dark'} />
              <Typography variant="caption" style={{ marginLeft: '8px' }}>
                {email}
              </Typography>
            </Contact>
          </Socials>
        </Row>
        <Copyright>
          <Typography variant="caption" color="dark">
            {copyright}
          </Typography>
        </Copyright>
      </StyledFooter>
    </Container>
  )
}

export default Footer

import Container from 'components/Container'
import { SocialIcons } from 'components/Icons'
import { FooterLogo } from 'components/Images'
import NavLink from 'components/NavLink'
import Typography from 'components/Typography'
import { FormattedMessage } from 'react-intl'
import { Contact, FooterCenter, FooterLogoWrap, Links, LinksColumn, LinksGroup, Socials } from './styles'

const Footer = () => {
  return (
    <Container backgroundColor="footer" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
      <FooterCenter>
        <Links>
          <LinksColumn>
            <Typography variant="h4" color="footer">
              <FormattedMessage id={'footer.title.1'} />
            </Typography>
            <LinksGroup>
              <NavLink href="/about">
                <Typography color="footer">
                  <FormattedMessage id="footer.about" />
                </Typography>
              </NavLink>
              <NavLink href="/gallery">
                <Typography color="footer">
                  <FormattedMessage id="footer.gallery" />
                </Typography>
              </NavLink>
            </LinksGroup>
          </LinksColumn>
          <LinksColumn>
            <Typography variant="h4" color="footer">
              <FormattedMessage id={'footer.title.2'} />
            </Typography>
            <LinksGroup>
              <NavLink href="/gallery/weddings">
                <Typography color="footer">
                  <FormattedMessage id="footer.weddings" />
                </Typography>
              </NavLink>
              <NavLink href="/gallery/portraits">
                <Typography color="footer">
                  <FormattedMessage id="footer.portraits" />
                </Typography>
              </NavLink>
              <NavLink href="/gallery/events">
                <Typography color="footer">
                  <FormattedMessage id="footer.events" />
                </Typography>
              </NavLink>
            </LinksGroup>
          </LinksColumn>
        </Links>
        <Socials>
          <FooterLogoWrap>
            <FooterLogo />
          </FooterLogoWrap>
          <Contact>
            <SocialIcons color={'dark'} />
            <Typography variant="caption" style={{ marginLeft: '8px' }}>
              ana_orlic@yahoo.com
            </Typography>
          </Contact>
        </Socials>
      </FooterCenter>
    </Container>
  )
}

export default Footer

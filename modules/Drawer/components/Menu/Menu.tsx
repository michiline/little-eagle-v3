import { SocialIcons } from 'components/Icons'
import NavLink from 'components/NavLink'
import Typography from 'components/Typography'
import { useRouter } from 'next/router'
import { FormattedMessage } from 'react-intl'
import { email } from 'utils/const'
import { LocaleLink, LocaleLinks, MenuLink, NavLinks, Socials, StyledMenu } from './styles'
import useIsMounted from 'utils/hooks/useIsMounted'

export interface MenuProps {
  isOpen: boolean
  toggleDrawer: () => void
}

const Menu = ({ isOpen, toggleDrawer }: MenuProps) => {
  const router = useRouter()
  const { locale, pathname } = router
  const isMounted = useIsMounted()
  return (
    <StyledMenu isOpen={isOpen} isMounted={isMounted}>
      <LocaleLinks>
        <NavLink locale="en" handleClick={toggleDrawer}>
          <LocaleLink variant="caption" color="light" fontWeight="bold" isActive={locale === 'en'}>
            EN
          </LocaleLink>
        </NavLink>
        <NavLink locale="hr" handleClick={toggleDrawer}>
          <LocaleLink variant="caption" color="light" fontWeight="bold" isActive={locale === 'hr'}>
            HR
          </LocaleLink>
        </NavLink>
      </LocaleLinks>
      <NavLinks>
        <NavLink href="/" handleClick={toggleDrawer} fullWidth={true}>
          <MenuLink variant="menu" color="light" isActive={pathname === '/'}>
            <FormattedMessage id={'menu.home'} />
          </MenuLink>
        </NavLink>
        <NavLink href="/portfolio" handleClick={toggleDrawer} fullWidth={true}>
          <MenuLink variant="menu" color="light" isActive={pathname === '/portfolio'}>
            <FormattedMessage id={'menu.portfolio'} />
          </MenuLink>
        </NavLink>
        <NavLink href="/about" handleClick={toggleDrawer} fullWidth={true}>
          <MenuLink variant="menu" color="light" isActive={pathname === '/about'}>
            <FormattedMessage id={'menu.about'} />
          </MenuLink>
        </NavLink>
        <Socials>
          <SocialIcons color={'light'} />
          <Typography variant="caption" color="light" style={{ marginRight: '8px' }}>
            {email}
          </Typography>
        </Socials>
      </NavLinks>
    </StyledMenu>
  )
}

export default Menu

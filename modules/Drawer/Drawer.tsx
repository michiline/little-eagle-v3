import { IconClose, IconHamburger, SocialIcons } from 'components/Icons'
import NavLink from 'components/NavLink'
import Typography from 'components/Typography'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { email } from 'utils/const'
import { Backdrop, LocaleLink, LocaleLinks, MenuIcon, MenuLink, NavLinks, Socials, StyledDrawer } from './styles'

export interface DrawerProps {
  isOpen: boolean
  toggle: () => void
}

const Drawer = () => {
  const [isOpen, toggle] = useState(false)
  const router = useRouter()
  const { locale, pathname, query } = router
  const toggleDrawer = useCallback(() => {
    toggle(isOpen => !isOpen)
  }, [])
  return (
    <>
      <StyledDrawer isOpen={isOpen}>
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
          <NavLink href="/" handleClick={toggleDrawer}>
            <MenuLink variant="menu" color="light" isActive={pathname === '/'}>
              <FormattedMessage id={'menu.home'} />
            </MenuLink>
          </NavLink>
          <NavLink href="/gallery" handleClick={toggleDrawer}>
            <MenuLink variant="menu" color="light" isActive={pathname === '/portfolio'}>
              <FormattedMessage id={'menu.portfolio'} />
            </MenuLink>
          </NavLink>
          <NavLink href="/about" handleClick={toggleDrawer}>
            <MenuLink variant="menu" color="light" isActive={pathname === '/about'}>
              <FormattedMessage id={'menu.about'} />
            </MenuLink>
          </NavLink>
          <Socials>
            <SocialIcons color={'light'} />
            <Typography variant="caption" color="light">
              {email}
            </Typography>
          </Socials>
        </NavLinks>
      </StyledDrawer>
      <MenuIcon onClick={toggleDrawer}>
        <IconHamburger show={!isOpen} color="dark" />
        <IconClose show={isOpen} />
      </MenuIcon>
      <Backdrop isOpen={isOpen} onClick={toggleDrawer} />
    </>
  )
}

export default Drawer

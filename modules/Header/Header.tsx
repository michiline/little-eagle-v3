import { IconBack, IconClose, IconHamburger } from 'components/Icons'
import NavLink from 'components/NavLink'
import Typography from 'components/Typography'
import { useRouter } from 'next/router'
import useScroll from 'utils/hooks/useScroll'
import { MenuIconPlaceholder, StyledHeader, TitleLarge, TitleSmall, TitleWrap } from './styles'

const Header = () => {
  const { isScrolled } = useScroll({ boundary: 0 })
  const router = useRouter()
  if (router.pathname === '/') {
    return
  }
  return (
    <StyledHeader isScrolled={isScrolled}>
      <IconBack color="dark" handleClick={() => router.back()} />
      <NavLink href="/">
        <TitleWrap>
          <TitleLarge variant="h2" fontWeight="normal" color="black">
            little
          </TitleLarge>
          <TitleLarge variant="h2" fontWeight="normal" color="menu">
            eagle
          </TitleLarge>
          <TitleLarge variant="h2" fontWeight="normal" color="black">
            photography
          </TitleLarge>
          <TitleSmall variant="h2" fontWeight="normal" color="black">
            l
          </TitleSmall>
          <TitleSmall variant="h2" fontWeight="normal" color="menu">
            e
          </TitleSmall>
          <TitleSmall variant="h2" fontWeight="normal" color="black">
            photography
          </TitleSmall>
        </TitleWrap>
      </NavLink>
      <MenuIconPlaceholder />
    </StyledHeader>
  )
}

export default Header

import { IconBack, IconClose, IconHamburger } from 'components/Icons'
import { useRouter } from 'next/router'
import useScroll from 'utils/hooks/useScroll'
import { StyledHeader } from './styles'

const Header = () => {
  const { isScrolled } = useScroll({ boundary: 0 })
  const router = useRouter()
  return (
    <StyledHeader isScrolled={isScrolled} show={router.pathname !== '/'}>
      <IconBack color="dark" />
    </StyledHeader>
  )
}

export default Header

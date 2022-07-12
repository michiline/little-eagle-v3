import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { Stylable } from 'utils/types'
import { StyledNavLink } from './styles'

export interface NavLinkProps extends Stylable {
  children: ReactNode
  href?: string
  isImage?: boolean
  locale?: string
  handleClick?: () => void
}

const NavLink = ({ children, href, isImage = false, locale, handleClick }: NavLinkProps) => {
  const router = useRouter()
  const currentLocale = router.locale
  const currentPathname = router.pathname
  const currentQuery = router.query
  return (
    <Link
      href={locale ? { pathname: currentPathname, query: currentQuery } : href}
      locale={locale ? locale : currentLocale}
      passHref
    >
      <StyledNavLink isImage={isImage} onClick={handleClick}>
        {children}
      </StyledNavLink>
    </Link>
  )
}

export default NavLink

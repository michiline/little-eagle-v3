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
  fullWidth?: boolean
  handleClick?: () => void
}

const NavLink = ({ children, href, locale, handleClick, fullWidth = false, style, className }: NavLinkProps) => {
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
      <StyledNavLink fullWidth={fullWidth} onClick={handleClick} style={style} className={className}>
        {children}
      </StyledNavLink>
    </Link>
  )
}

export default NavLink

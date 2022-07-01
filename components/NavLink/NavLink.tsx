import Link from 'next/link'
import { ReactNode } from 'react'
import { Stylable } from 'utils/types'
import { StyledNavLink } from './styles'

export interface NavLinkProps extends Stylable {
  children: ReactNode
  href: string
  isImage?: boolean
}

const NavLink = ({ children, href, isImage = false }: NavLinkProps) => (
  <Link href={href} passHref>
    <StyledNavLink isImage={isImage}>{children}</StyledNavLink>
  </Link>
)

export default NavLink

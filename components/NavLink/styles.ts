import styled, { css } from 'styled-components'
import { NavLinkProps } from './NavLink'

type StyledNavLinkProps = Pick<NavLinkProps, 'isImage'>

export const StyledNavLink = styled.a<StyledNavLinkProps>`
  color: inherit;
  text-decoration: none;
  display: block;
  ${p =>
    p.isImage &&
    css`
      width: 100%;
      height: 100%;
    `}
`

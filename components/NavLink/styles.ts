import styled, { css } from 'styled-components'
import { NavLinkProps } from './NavLink'

type StyledNavLinkProps = Pick<NavLinkProps, 'isImage'>

export const StyledNavLink = styled.a<StyledNavLinkProps>`
  color: inherit;
  text-decoration: none;
  display: flex;
  @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
    justify-content: center;
  }
  ${p =>
    p.isImage &&
    css`
      width: 100%;
      height: 100%;
    `}
`

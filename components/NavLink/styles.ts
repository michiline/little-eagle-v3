import styled, { css } from 'styled-components'
import { NavLinkProps } from './NavLink'

type StyledNavLinkProps = Pick<NavLinkProps, 'fullWidth'>

export const StyledNavLink = styled.a<StyledNavLinkProps>`
  color: inherit;
  text-decoration: none;
  display: flex;
  width: max-content;
  ${p =>
    p.fullWidth &&
    css`
      justify-content: center;
      width: 100%;
    `}
`

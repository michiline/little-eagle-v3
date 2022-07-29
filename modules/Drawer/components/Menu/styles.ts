import Typography from 'components/Typography'
import styled, { css } from 'styled-components'

export const StyledMenu = styled.div<{ isOpen: boolean }>`
  width: 376px;
  height: 100%;
  background-color: ${p => p.theme.colors.menu};
  position: fixed;
  top: 0;
  right: 0;
  z-index: 11;
  transition-property: transform;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(376px);
  visibility: hidden;
  @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
    width: 326px;
  }
  ${p =>
    p.isOpen &&
    `
  transform: translateX(0);
  visibility: visible;
`}
`

export const LocaleLinks = styled.div`
  width: 100%;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
    height: 64px;
  }
`

export const LocaleLink = styled(Typography)<{ isActive: boolean }>`
  padding: 8px;
  padding-bottom: ${p => (p.isActive ? '7px' : '10px')};
  margin-left: 8px;
  &:first-of-type {
    margin-left: 0px;
  }
  border-bottom: 3px solid ${p => (p.isActive ? p.theme.colors.background.primary : 'none')};
`

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`
export const MenuLink = styled(Typography)<{ isActive: boolean }>`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 48px;
  padding-right: 16px;
  width: 100%;
  &:first-of-type {
    margin-left: 0px;
  }
  ${p =>
    p.isActive &&
    css`
      font-weight: bold;
    `}
`

export const Socials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  bottom: 48px;
  right: 8px;
`

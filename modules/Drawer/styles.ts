import Typography from 'components/Typography'
import styled, { css } from 'styled-components'
import { DrawerProps } from './Drawer'

type StyledDrawerProps = Pick<DrawerProps, 'isOpen'>

export const StyledDrawer = styled.div<StyledDrawerProps>`
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
  @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
    width: 326px;
  }
  ${p =>
    p.isOpen &&
    `
  transform: translateX(0);
`}
`

export const Backdrop = styled.div<{ isOpen: boolean; onClick: () => void }>`
  width: 100%;
  height: 100%;
  background: linear-gradient(182.59deg, rgba(96, 84, 84, 0.8) 2.1%, rgba(156, 108, 105, 0.6) 97.84%);
  transition-property: opacity;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  ${p =>
    p.isOpen &&
    `
    opacity: 1;
    z-index: 10;
  `}
`

export const MenuIcon = styled.div`
  top: 24px;
  right: 16px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
    top: 8px;
    right: 8px;
  }
  position: fixed;
  width: 48px;
  height: 48px;
  z-index: 11;
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
  padding: 16px 48px;
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
  right: 32px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
    right: 24px;
  }
`

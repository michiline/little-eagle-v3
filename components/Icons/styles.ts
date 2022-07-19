import styled from 'styled-components'
import { DoubleIconProps } from './Base'

export const StyledSocialIcons = styled.div`
  display: flex;
`

export const StyledSvg = styled.svg`
  padding: 8px;
  cursor: pointer;
`
export const DoubleStyledSvg = styled(StyledSvg)<DoubleIconProps>`
  cursor: pointer;
  opacity: ${p => (p.show ? 1 : 0)};
  position: absolute;
  transition-property: opacity;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  display: block;
`

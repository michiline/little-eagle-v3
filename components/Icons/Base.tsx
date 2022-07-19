import * as React from 'react'
import { useTheme } from 'styled-components'
import { Stylable } from 'utils/types'
import { DoubleStyledSvg, StyledSvg } from './styles'

export interface IconProps extends Stylable {
  color?: 'dark' | 'light'
  viewBox?: string
  stroke?: string
  fill?: string
  width?: number
  height?: number
  children?: React.ReactNode
  handleClick?: () => void
}

export interface DoubleIconProps extends IconProps {
  show: boolean
}

export const IconBase = ({ children, color, handleClick, ...rest }: IconProps) => {
  const theme = useTheme()
  return (
    <StyledSvg
      stroke={color === 'dark' ? theme.colors.text.primary : theme.colors.background.primary}
      {...rest}
      onClick={handleClick}
    >
      {children}
    </StyledSvg>
  )
}

export const DoubleIconBase = ({ children, color, ...rest }: DoubleIconProps) => {
  const theme = useTheme()
  return (
    <DoubleStyledSvg stroke={color === 'dark' ? theme.colors.text.primary : theme.colors.background.primary} {...rest}>
      {children}
    </DoubleStyledSvg>
  )
}

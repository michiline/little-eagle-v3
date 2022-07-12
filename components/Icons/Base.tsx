import * as React from 'react'
import { useTheme } from 'styled-components'
import { Stylable } from 'utils/types'
import { StyledSvg } from './styles'

export interface IconProps extends Stylable {
  color?: 'dark' | 'light'
  viewBox?: string
  stroke?: string
  fill?: string
  width?: number
  height?: number
  children?: React.ReactNode
}

export const IconBase = ({ children, color, ...rest }: IconProps) => {
  const theme = useTheme()
  return (
    <StyledSvg stroke={color === 'dark' ? theme.colors.text.primary : theme.colors.background.primary} {...rest}>
      {children}
    </StyledSvg>
  )
}

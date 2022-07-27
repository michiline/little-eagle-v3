import React, { ReactNode } from 'react'
import { Stylable } from 'utils/types'
import { StyledTypography } from './styles'

export interface TypographyProps extends Stylable {
  children: ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'menu' | 'button' | 'caption'
  fontWeight?: 'bold' | 'normal'
  color?: 'dark' | 'light' | 'menu' | 'footer' | 'black'
  shadow?: boolean
}

const Typography = ({
  children,
  variant = 'body',
  fontWeight = 'normal',
  color = 'dark',
  style,
  className,
  shadow = false,
}: TypographyProps) => {
  return (
    <StyledTypography
      variant={variant}
      fontWeight={fontWeight}
      color={color}
      style={style}
      className={className}
      shadow={shadow}
    >
      {children}
    </StyledTypography>
  )
}

export default Typography

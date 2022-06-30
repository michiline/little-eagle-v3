import React, { ReactNode } from 'react'

import { StyledTypography } from './styles'

export interface Props {
  children: ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'menu' | 'button' | 'caption'
  fontWeight?: 'bold' | 'normal'
  color?: 'primary' | 'secondary'
}

const Typography = ({ children, variant = 'body', fontWeight = 'normal', color = 'primary' }: Props) => {
  return (
    <StyledTypography variant={variant} fontWeight={fontWeight} color={color}>
      {children}
    </StyledTypography>
  )
}

export default Typography

import { ReactNode } from 'react'
import { Stylable } from 'utils/types'
import { StyledButton } from './styles'

export interface ButtonProps extends Stylable {
  children: ReactNode
  variant?: 'contained' | 'outlined'
}

const Button = ({ children, variant = 'contained', style, className }: ButtonProps) => {
  return (
    <StyledButton variant={variant} style={style} className={className}>
      {children}
    </StyledButton>
  )
}

export default Button

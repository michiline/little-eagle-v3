import { ReactNode } from 'react'
import { Stylable } from 'utils/types'
import { StyledButton } from './styles'

export interface ButtonProps extends Stylable {
  children: ReactNode
  variant?: 'contained' | 'outlined'
  handleClick?: () => void
}

const Button = ({ children, variant = 'contained', handleClick, style, className }: ButtonProps) => {
  return (
    <StyledButton variant={variant} style={style} className={className} onClick={handleClick}>
      {children}
    </StyledButton>
  )
}

export default Button

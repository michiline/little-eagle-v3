import { ReactNode } from 'react'
import { Stylable } from 'utils/types'
import { StyledContainer } from './styles'

export interface ContainerProps extends Stylable {
  backgroundColor: string
  minHeight?: boolean
  minimal?: boolean
  children: ReactNode
}

const Container = ({ children, ...rest }: ContainerProps) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>
}

export default Container

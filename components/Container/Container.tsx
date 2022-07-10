import { ReactNode } from 'react'
import { Stylable } from 'utils/types'
import { StyledContainer } from './styles'

export interface ContainerProps extends Stylable {
  backgroundColor: string
  children: ReactNode
}

const Container = ({ backgroundColor, children, style }: ContainerProps) => {
  return (
    <StyledContainer backgroundColor={backgroundColor} style={style}>
      {children}
    </StyledContainer>
  )
}

export default Container

import { ReactNode } from 'react'
import { Stylable } from 'utils/types'
import { Container } from './styles'

export interface CoverProps extends Stylable {
  imgUrl: string
  overlay?: boolean
  children: ReactNode
}

const Cover = ({ imgUrl, overlay = false, children }: CoverProps) => {
  return (
    <Container imgUrl={imgUrl} overlay={overlay}>
      {children}
    </Container>
  )
}

export default Cover

import { ReactNode } from 'react'
import { Stylable } from 'utils/types'
import { Container } from './styles'

export interface CoverProps extends Stylable {
  imgUrl: string
  children: ReactNode
}

const Cover = ({ imgUrl, children }: CoverProps) => {
  return <Container imgUrl={imgUrl}>{children}</Container>
}

export default Cover

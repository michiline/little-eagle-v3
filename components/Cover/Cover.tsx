import { ReactNode } from 'react'
import { Stylable } from 'utils/types'
import { Container } from './styles'

export interface CoverProps extends Stylable {
  imgUrl: string
  home?: boolean
  children: ReactNode
}

const Cover = ({ imgUrl, home = false, children }: CoverProps) => {
  return (
    <Container imgUrl={imgUrl} home={home}>
      {children}
    </Container>
  )
}

export default Cover

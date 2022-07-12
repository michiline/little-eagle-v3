import { Stylable } from 'utils/types'
import { StyledImage } from './styles'

export interface ImageProps extends Stylable {
  src: string
  width?: number
  height?: number
  alt: string
  fullWidth?: boolean
}

export const ImageBase = ({ fullWidth = false, ...rest }: ImageProps) => {
  return <StyledImage fullWidth={fullWidth} {...rest} />
}

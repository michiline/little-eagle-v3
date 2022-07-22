import Link from 'next/link'
import { FormattedMessage } from 'react-intl'
import { Image, Stylable } from 'utils/types'
import { StyledImage, ImageLink, StyledImageGrid, Overlay, Title } from './styles'

export interface ImageGridProps extends Stylable {
  images: Array<Image>
  numInRow: number
}

const ImageGrid = ({ images, numInRow, style, className }: ImageGridProps) => {
  return (
    <StyledImageGrid style={style} className={className}>
      {images &&
        images.map(({ id, url, href }, index: number) => {
          return (
            <Link key={index} href={href} passHref>
              <ImageLink numInRow={numInRow}>
                <Overlay />
                <Title variant="h3" color="light">
                  <FormattedMessage id={id} />
                </Title>
                <StyledImage src={url} alt={'alt'} />
              </ImageLink>
            </Link>
          )
        })}
    </StyledImageGrid>
  )
}

export default ImageGrid

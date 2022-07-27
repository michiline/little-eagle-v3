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
        images.map(({ id, url, href, hidden }, index: number) => {
          return (
            <Link key={index} href={href} passHref>
              <ImageLink numInRow={numInRow} hidden={hidden}>
                <Overlay />
                <Title variant="h3" color="light" shadow={true}>
                  <FormattedMessage id={id} />
                </Title>
                <StyledImage src={url} alt={id} />
              </ImageLink>
            </Link>
          )
        })}
    </StyledImageGrid>
  )
}

export default ImageGrid

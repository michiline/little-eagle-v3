import Image from 'next/image'
import { useTheme } from 'styled-components'
import { ListItem, StyledSquareImageGrid } from './styles'

const SquareImageGrid = ({ images, handleClick }) => {
  const theme = useTheme()
  return (
    <StyledSquareImageGrid>
      {images.map((elem, index) => (
        <ListItem key={index} onClick={() => handleClick(index)}>
          <Image
            src={elem}
            alt={index}
            layout="fill"
            objectFit="cover"
            sizes={`(min-width: ${theme.breakpoints.lg}px) 25vw, 100vw`}
          />
        </ListItem>
      ))}
      {images.slice(0, images.length % 4).map((elem, index) => (
        <ListItem key={index} hidden={true}>
          <Image
            src={elem}
            alt={index}
            layout="fill"
            objectFit="cover"
            sizes={`(min-width: ${theme.breakpoints.lg}px) 25vw, 100vw`}
          />
        </ListItem>
      ))}
    </StyledSquareImageGrid>
  )
}

export default SquareImageGrid

// sizes={`(min-width: ${theme.breakpoints.lg}px) 25vw, 100vw`}

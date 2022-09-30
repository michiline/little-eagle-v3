import Image from 'next/image'
import { ListItem, StyledSquareImageGrid } from './styles'

const SquareImageGrid = ({ images, handleClick }) => {
  return (
    <StyledSquareImageGrid>
      {images.map((elem, index) => (
        <ListItem key={index} onClick={() => handleClick(index)}>
          <Image src={elem} alt={index} layout="fill" objectFit="cover" quality={30} />
        </ListItem>
      ))}
      {images.slice(0, images.length % 4).map((elem, index) => (
        <ListItem key={index} hidden={true}>
          <Image src={elem} alt={index} layout="fill" objectFit="cover" quality={30} />
        </ListItem>
      ))}
    </StyledSquareImageGrid>
  )
}

export default SquareImageGrid

import Container from 'components/Container'
import { CustomImage, ListItem, StyledGalleryJustified } from './styles'

const GalleryJustifed = ({ images, handleClick }) => {
  return (
    <Container backgroundColor="primary" minHeight={true}>
      <StyledGalleryJustified>
        {images.map((elem, index) => (
          <ListItem key={index} onClick={() => handleClick(index)}>
            <CustomImage src={elem.url} alt={elem.id} />
          </ListItem>
        ))}
        <ListItem />
      </StyledGalleryJustified>
    </Container>
  )
}

export default GalleryJustifed

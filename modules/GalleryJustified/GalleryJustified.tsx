import Container from 'components/Container'
import { useRouter } from 'next/router'
import { CustomImage, ListItem, StyledGalleryJustified } from './styles'

const GalleryJustifed = ({ images, handleClick }) => {
  const router = useRouter()
  const { pathname, query } = router
  return (
    <Container backgroundColor="primary" minHeight={true} minimal={true}>
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

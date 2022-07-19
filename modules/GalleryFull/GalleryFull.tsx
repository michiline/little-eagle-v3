import useOnKeyDown from 'utils/hooks/useOnKeyDown'
import { BackIcon, Center, CloseIcon, ForwardIcon, FullScreenImg, StyledGalleryFull } from './styles'

interface GalleryFullProps {
  url: string
  handleClose: () => void
  handleNext: () => void
  handlePrevious: () => void
}

const GalleryFull = ({ url, handleClose, handleNext, handlePrevious }: GalleryFullProps) => {
  useOnKeyDown({
    handleClick: handleNext,
    key: 'ArrowRight',
  })
  useOnKeyDown({
    handleClick: handlePrevious,
    key: 'ArrowLeft',
  })
  useOnKeyDown({
    handleClick: handleClose,
    key: 'Escape',
  })
  return (
    <StyledGalleryFull show={!!url}>
      <Center>
        <FullScreenImg src={url} alt="alt" />
      </Center>
      <CloseIcon handleClick={handleClose} />
      <BackIcon handleClick={handlePrevious} />
      <ForwardIcon handleClick={handleNext} />
    </StyledGalleryFull>
  )
}

export default GalleryFull

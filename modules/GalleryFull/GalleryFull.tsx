import useOnKeyDown from 'utils/hooks/useOnKeyDown'
import { BackIcon, Center, CloseIcon, DownloadIcon, ForwardIcon, FullScreenImage, StyledGalleryFull } from './styles'

interface GalleryFullProps {
  url: string
  enableDownload?: boolean
  handleClose: () => void
  handleNext: () => void
  handlePrevious: () => void
}

const GalleryFull = ({ url, enableDownload = false, handleClose, handleNext, handlePrevious }: GalleryFullProps) => {
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
      <Center>{url && <FullScreenImage src={url} alt="alt" layout="fill" quality={100} />}</Center>
      {enableDownload && (
        <a href={url} target="_blank" rel={'noreferrer'} download>
          <DownloadIcon />
        </a>
      )}
      <CloseIcon handleClick={handleClose} />
      <BackIcon handleClick={handlePrevious} />
      <ForwardIcon handleClick={handleNext} />
    </StyledGalleryFull>
  )
}

export default GalleryFull

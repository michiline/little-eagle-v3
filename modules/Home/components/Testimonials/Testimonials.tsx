import Container from 'components/Container'
import Slideshow from 'components/Slideshow'
import { SlideshowItem } from 'utils/types'
import { StyledTestimonials } from './styles'

interface TestimonialsProps {
  testimonials: SlideshowItem[]
}

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <Container backgroundColor="primary">
      <StyledTestimonials>
        <Slideshow items={testimonials} />
      </StyledTestimonials>
    </Container>
  )
}

export default Testimonials

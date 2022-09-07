import Typography from 'components/Typography'
import { useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { SlideshowItem, Stylable } from 'utils/types'
import {
  SlideshowText,
  TextColumn,
  SlideshowBody,
  SlideshowPicker,
  CircleButton,
  ImageColumn,
  SlideshowImage,
  ImageCenter,
} from './styles'

interface SlideshowProps extends Stylable {
  items: Array<SlideshowItem>
}

const Slideshow = ({ items }: SlideshowProps) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((activeIndex + 1) % 4)
    }, 12000)
    return () => clearTimeout(timer)
  }, [activeIndex])
  return (
    <>
      <TextColumn>
        <Typography variant="h1" color={'dark'}>
          <FormattedMessage id={'home.testimonials.title'} />
        </Typography>
        <SlideshowText>
          {items.map((item, index) => (
            <SlideshowBody key={index} $active={index === activeIndex} $first={index === 0}>
              <Typography variant="body" color="dark">
                <FormattedMessage id={item.id} />
              </Typography>
              <Typography variant="body" color="dark" fontWeight="bold" style={{ marginTop: '16px' }}>
                <FormattedMessage id={item.author} />
              </Typography>
            </SlideshowBody>
          ))}
        </SlideshowText>
        <SlideshowPicker>
          {items.map((_, index) => (
            <CircleButton key={index} onClick={() => setActiveIndex(index)} $active={index === activeIndex} />
          ))}
        </SlideshowPicker>
      </TextColumn>
      <ImageColumn>
        <ImageCenter>
          {items.map((item, index) => (
            <SlideshowImage
              key={index}
              src={item.url}
              alt={'alt'}
              $first={index === 0}
              $active={index === activeIndex}
              layout="fill"
            />
          ))}
        </ImageCenter>
      </ImageColumn>
    </>
  )
}

export default Slideshow

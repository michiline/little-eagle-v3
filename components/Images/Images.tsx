import { ImageProps } from 'next/image'
import { aboutLogo, aboutTripodImage, footerLogo, homeAbout } from 'utils/const'
import { ImageBase } from './Base'

export const FooterLogo = () => <ImageBase src={footerLogo} width={190} alt={'alt'} />

type StyledImageProps = Pick<ImageProps, 'style' | 'className'>

export const AboutLogo = ({ style, className }: StyledImageProps) => (
  <ImageBase width={191} style={style} src={aboutLogo} alt={'alt'} className={className} />
)

export const AboutTripodImage = ({ style }: StyledImageProps) => (
  <ImageBase width={230} style={style} src={aboutTripodImage} alt={'alt'} />
)

import { ImageProps } from 'next/image'
import { aboutLogo, aboutTripodImage, footerLogo, homeAbout, homeLogo } from 'utils/const'
import { ImageBase } from './Base'

export const FooterLogo = () => <ImageBase src={footerLogo} width={190} alt={'alt'} />

type StyledImageProps = Pick<ImageProps, 'style' | 'className'>

export const HomeAboutImage = ({ style }: StyledImageProps) => (
  <ImageBase style={style} src={homeAbout} alt={'alt'} fullWidth={true} />
)

export const HomeLogo = ({ style }: StyledImageProps) => (
  <ImageBase width={190} style={style} src={homeLogo} alt={'alt'} />
)

export const AboutLogo = ({ style, className }: StyledImageProps) => (
  <ImageBase width={191} style={style} src={aboutLogo} alt={'alt'} className={className} />
)

export const AboutTripodImage = ({ style }: StyledImageProps) => (
  <ImageBase width={230} style={style} src={aboutTripodImage} alt={'alt'} />
)

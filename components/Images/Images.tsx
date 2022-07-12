import { ImageProps } from 'next/image'
import { footerLogo, homeAbout, homeLogo } from 'utils/const'
import { ImageBase } from './Base'

export const FooterLogo = () => <ImageBase src={footerLogo} width={190} alt={'alt'} />

type StyledImageProps = Pick<ImageProps, 'style'>

export const HomeAboutImage = ({ style }: StyledImageProps) => (
  <ImageBase style={style} src={homeAbout} alt={'alt'} fullWidth={true} />
)

export const HomeLogo = ({ style }: StyledImageProps) => (
  <ImageBase width={190} style={style} src={homeLogo} alt={'alt'} />
)

import { StyledIcon, StyledSocialIcons } from './styles'

interface IconProps {
  url: string
  href: string
  width: number
  height: number
}

export const Icon = ({ url, href, width, height }: IconProps) => (
  <a href={href} target="_blank" rel={'noreferrer'} style={{ height: 'min-content' }}>
    <StyledIcon src={url} width={width} height={height} />
  </a>
)

export const FacebookIcon = ({ color }) => (
  <Icon
    url={`/images/facebook${color === 'brown' ? '-brown' : ''}.png`}
    href="https://www.facebook.com/littleeaglephoto"
    width={48}
    height={48}
  />
)

export const InstagramIcon = ({ color }) => (
  <Icon
    url={`/images/instagram${color === 'brown' ? '-brown' : ''}.png`}
    href="https://www.instagram.com/littleeaglephoto"
    width={48}
    height={48}
  />
)

export const SocialIcons = ({ color }) => (
  <StyledSocialIcons>
    <FacebookIcon color={color} />
    <InstagramIcon color={color} />
  </StyledSocialIcons>
)

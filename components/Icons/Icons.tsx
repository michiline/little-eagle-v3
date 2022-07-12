import { Stylable } from 'utils/types'
import { IconBase } from './Base'
import { StyledSocialIcons } from './styles'

interface IconProps extends Stylable {
  color: 'light' | 'dark'
}

export const SocialIcons = ({ color }: IconProps) => {
  return (
    <StyledSocialIcons>
      <a href={'https://www.facebook.com/littleeaglephoto'} target="_blank" rel={'noreferrer'}>
        <IconFacebook color={color} />
      </a>
      <a href={'https://www.instagram.com/littleeaglephoto'} target="_blank" rel={'noreferrer'}>
        <IconInstagram color={color} />
      </a>
    </StyledSocialIcons>
  )
}

export const IconFacebook = ({ color }: IconProps) => {
  return (
    <IconBase width={33 + 2 * 8} height={32 + 2 * 8} color={color} fill="none">
      <path
        d="M24.9501 2.66669H20.9501C19.182 2.66669 17.4863 3.36907 16.2361 4.61931C14.9858 5.86955 14.2834 7.56524 14.2834 9.33335V13.3334H10.2834V18.6667H14.2834V29.3334H19.6168V18.6667H23.6168L24.9501 13.3334H19.6168V9.33335C19.6168 8.97973 19.7573 8.64059 20.0073 8.39055C20.2574 8.1405 20.5965 8.00002 20.9501 8.00002H24.9501V2.66669Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  )
}

export const IconInstagram = ({ style, color }: IconProps) => {
  return (
    <IconBase width={33 + 2 * 8} height={32 + 2 * 8} viewBox="0 0 33 32" fill="none" color={color} style={style}>
      <path
        d="M23.0918 2.66669H9.75846C6.07657 2.66669 3.0918 5.65146 3.0918 9.33335V22.6667C3.0918 26.3486 6.07657 29.3334 9.75846 29.3334H23.0918C26.7737 29.3334 29.7585 26.3486 29.7585 22.6667V9.33335C29.7585 5.65146 26.7737 2.66669 23.0918 2.66669Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.7584 15.16C21.9229 16.2696 21.7334 17.4029 21.2167 18.3987C20.7001 19.3944 19.8826 20.2019 18.8806 20.7062C17.8785 21.2106 16.743 21.3861 15.6354 21.2079C14.5279 21.0297 13.5047 20.5068 12.7115 19.7135C11.9183 18.9203 11.3954 17.8971 11.2172 16.7896C11.0389 15.682 11.2145 14.5465 11.7188 13.5445C12.2232 12.5424 13.0306 11.725 14.0264 11.2083C15.0221 10.6916 16.1554 10.5021 17.2651 10.6666C18.397 10.8345 19.4449 11.3619 20.254 12.1711C21.0631 12.9802 21.5906 14.0281 21.7584 15.16Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M23.7583 8.66669H23.7716" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
  )
}

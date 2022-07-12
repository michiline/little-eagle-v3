import styled, { css } from 'styled-components'
import { ImageProps } from './Base'

type StyledImageProps = Pick<ImageProps, 'fullWidth' | 'width'>

export const StyledImage = styled.img<StyledImageProps>`
  ${p =>
    !p.fullWidth &&
    css`
      width: ${p.width ? `${p.width}px` : 'auto'};
      height: ${p.height ? `${p.height}px` : 'auto'};
    `}
  ${p =>
    p.fullWidth &&
    css`
      width: 100%;
      height: auto;
    `}
    display: block;
`

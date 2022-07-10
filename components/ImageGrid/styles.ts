import Typography from 'components/Typography'
import styled, { css } from 'styled-components'
import { ImageGridProps } from './ImageGrid'

export const StyledImageGrid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 8px;
`

type StyledImageLinkProps = Pick<ImageGridProps, 'numInRow'>

export const ImageLink = styled.a<StyledImageLinkProps>`
  position: relative;
  display: flex;
  cursor: pointer;
  width: 100%;
  ${p =>
    p.numInRow === 3 &&
    css`
      @media only screen and (max-width: ${p => p.theme.breakpoints.lg}px) {
        max-width: 100%;
      }
      max-width: calc(100% / 3 - 16px / 3);
    `}
  ${p =>
    p.numInRow === 2 &&
    css`
      @media only screen and (max-width: ${p => p.theme.breakpoints.lg}px) {
        max-width: 100%;
      }
      max-width: calc(100% / 2 - 8px / 2);
    `}
`

export const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
`

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    0deg,
    ${p => p.theme.colors.background.tertiary}B2,
    ${p => p.theme.colors.background.tertiary}B2
  );
  visibility: hidden;
  opacity: 0;
  transition-property: visibility, opacity;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  @media (hover: hover) and (pointer: fine) {
    ${ImageLink}:hover & {
      visibility: visible;
      opacity: 1;
    }
  }

  z-index: 3;
`

export const Title = styled(Typography)`
  position: absolute;
  bottom: 8px;
  left: 24px;
  text-shadow: 5px 10px 10px rgba(121, 117, 117, 0.15);
  transition-property: transform;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 4;
  @media (hover: hover) and (pointer: fine) {
    ${ImageLink}:hover & {
      transform: scale(1.05);
    }
  }
`

import styled, { css } from 'styled-components'
import { CoverProps } from './Cover'

type StyledCoverProps = Pick<CoverProps, 'imgUrl' | 'overlay'>

export const Container = styled.div<StyledCoverProps>`
  width: 100%;
  height: 100vh;
  background-image: url(${p => p.imgUrl});
  ${p =>
    p.overlay &&
    css`
      background-image: linear-gradient(182.59deg, rgba(96, 84, 84, 0.6) 2.1%, rgba(156, 108, 105, 0.3) 97.84%),
        url(${p.imgUrl});
    `}

  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: ${p => p.theme.breakpoints.lg}px) {
    background-image: url(${p => p.imgUrl.split('.jpg')[0]}-${p => p.theme.breakpoints.md}px.jpg);
    ${p =>
      p.overlay &&
      css`
        background-image: linear-gradient(182.59deg, rgba(96, 84, 84, 0.6) 2.1%, rgba(156, 108, 105, 0.3) 97.84%),
          url(${p.imgUrl.split('.jpg')[0]}-${p.theme.breakpoints.md}px.jpg);
      `}
  }
  padding: 0 8px;
`

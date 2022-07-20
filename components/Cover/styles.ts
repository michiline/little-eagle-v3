import styled, { css } from 'styled-components'
import { CoverProps } from './Cover'

type StyledCoverProps = Pick<CoverProps, 'imgUrl' | 'home'>

export const Container = styled.div<StyledCoverProps>`
  width: 100%;
  height: 100vh;
  background-image: url(${p => p.imgUrl});
  ${p =>
    p.home &&
    css`
      background-image: linear-gradient(182.59deg, rgba(96, 84, 84, 0.6) 2.1%, rgba(156, 108, 105, 0.3) 97.84%),
        url(${p.imgUrl});
      align-items: center;
      justify-content: center;
    `}
  display: flex;
  flex-direction: column;

  ${p =>
    !p.home &&
    css`
      align-items: flex-start;
      justify-content: flex-end;
      padding: 48px;
    `}
  background-size: cover;
  background-position: center;

  @media only screen and (max-width: ${p => p.theme.breakpoints.lg}px) {
    background-image: url(${p => p.imgUrl.split('.jpg')[0]}-${p => p.theme.breakpoints.md}px.jpg);
    ${p =>
      p.home &&
      css`
        background-image: linear-gradient(182.59deg, rgba(96, 84, 84, 0.6) 2.1%, rgba(156, 108, 105, 0.3) 97.84%),
          url(${p.imgUrl.split('.jpg')[0]}-${p.theme.breakpoints.md}px.jpg);
      `}
  }
`

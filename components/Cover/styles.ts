import styled from 'styled-components'
import { CoverProps } from './Cover'

type StyledCoverProps = Pick<CoverProps, 'imgUrl'>

export const Container = styled.div<StyledCoverProps>`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(182.59deg, rgba(96, 84, 84, 0.6) 2.1%, rgba(156, 108, 105, 0.3) 97.84%),
    url(${p => `${p.imgUrl}.jpg`});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: ${p => p.theme.breakpoints.lg}px) {
    background-image: linear-gradient(182.59deg, rgba(96, 84, 84, 0.6) 2.1%, rgba(156, 108, 105, 0.3) 97.84%),
      url(${p => `${p.imgUrl}-${p.theme.breakpoints.md}px.jpg`});
  }
  padding: 0 8px;
`

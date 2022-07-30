import Typography from 'components/Typography'
import Image from 'next/image'
import styled from 'styled-components'

export const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const CoverCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 96px 16px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
    width: 100%:
  }
  z-index: 2;
`

export const Subtitle = styled(Typography)`
  width: 100%;
  text-align: center;
  margin-top: 16px;
`

export const StyledHomeCover = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CoverImage = styled(Image)`
  object-fit: cover;
`

export const CoverImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`

export const CoverImageContainerWeb = styled(CoverImageContainer)`
  @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
    display: none;
  }
`
export const CoverImageContainerMobile = styled(CoverImageContainer)`
  @media only screen and (min-width: ${p => p.theme.breakpoints.md + 1}px) {
    display: none;
  }
`

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(182.59deg, rgba(96, 84, 84, 0.6) 2.1%, rgba(156, 108, 105, 0.3) 97.84%);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`

import styled from 'styled-components'

export const StyledHomeAbout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 960px;
  padding: 96px 16px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
    max-width: 475px;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: ${p => p.theme.breakpoints.sm}px) {
    padding: 48px 16px;
  }
`

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-left: 80px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
    margin-top: 48px;
    margin-left: 0;
  }
`

export const AboutBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 24px;
`

export const ImageColumn = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  aspect-ratio: 2 / 3;
  @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
    width: 100%;
  }
`

export const ImageFrame = styled.div`
  position: absolute;
  top: 24px;
  left: 16px;
  width: 100%;
  height: 100%;
  border: 3px solid ${p => p.theme.colors.text.primary};
  @media only screen and (max-width: ${p => p.theme.breakpoints.sm}px) {
    display: none;
  }
`

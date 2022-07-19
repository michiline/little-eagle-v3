import styled from 'styled-components'

export const StyledGalleryJustified = styled.ul`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  list-style: none;
  @media (max-aspect-ratio: 1/1) and (max-width: 480px) {
    flex-direction: row;
  }
`

export const ListItem = styled.li`
  height: 25vh;
  flex-grow: 1;
  &:last-child {
    flex-grow: 10;
  }
  @media (max-aspect-ratio: 1/1) {
    height: 20vh;
  }
  @media (max-height: 480px) {
    height: 70vh;
  }
  @media (max-aspect-ratio: 1/1) and (max-width: 480px) {
    height: auto;
    width: 100%;
  }
  margin: 2px 2px;
  transition-property: opacity;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`

export const CustomImage = styled.img`
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
  height: 100%;
  @media (max-aspect-ratio: 1/1) and (max-width: 480px) {
    width: 100%;
    max-height: 75vh;
    min-width: 0;
  }
`

import styled, { css } from 'styled-components'

export const StyledSquareImageGrid = styled.ul`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  row-gap: 4px;
  padding: 24px 16px;
  @media only screen and (max-width: ${p => p.theme.breakpoints.sm}px) {
    padding: 0px 2px;
    padding-bottom: 24px;
  }
`

export const ListItem = styled.li`
  position: relative;
  display: flex;
  cursor: pointer;
  width: 100%;
  max-width: calc(100% / 4 - 16px / 4);
  aspect-ratio: 1;
  @media only screen and (max-width: ${p => p.theme.breakpoints.lg}px) {
    max-width: 100%;
  }
  ${p =>
    p.hidden &&
    css`
      @media only screen and (min-width: ${p => p.theme.breakpoints.lg + 1}px) {
        visibility: hidden;
      }
      @media only screen and (max-width: ${p => p.theme.breakpoints.lg}px) {
        display: none;
      }
    `}
  transition-property: opacity;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`

export const Toolbar = styled.div`
  width: min-content;
  display: flex;
  flex-direction: row;
  margin: 24px 0;
`

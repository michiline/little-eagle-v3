import styled from 'styled-components'

export const StyledSocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  height: min-content;
`

export const StyledIcon = styled.img`
  padding: 8px;
  cursor: pointer;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
`

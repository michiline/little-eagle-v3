import styled from 'styled-components'

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 382px;
  padding: 48px 0;
`

export const Form = styled.div`
  width: 100%;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
`

export const Input = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 24px;
  &:first-of-type {
    margin-top: 0;
  }
  border-radius: 4px;
  border: 1px solid ${p => p.theme.colors.text.primary};
  padding-left: 20px;
  &:hover {
    background-color: ${p => p.theme.colors.background.secondary}7A;
  }
  &:focus {
    background-color: ${p => p.theme.colors.background.secondary};
  }
  color: ${p => p.theme.colors.text.primary};
`

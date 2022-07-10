import styled from 'styled-components'
import { ButtonProps } from './Button'

type StyledButtonProps = Pick<ButtonProps, 'variant'>

export const StyledButton = styled.div<StyledButtonProps>(
  ({ theme, variant }) => `
      font-family: ${theme.typography.family.secondary};
      font-weight: ${theme.typography.weight.Bold};
      font-size: ${theme.typography.size.Button}px;
      line-height: 1.5;
      background-color: ${
        variant === 'contained' ? theme.colors.text.primary : `${theme.colors.background.secondary}32`
      };
      border: ${variant === 'contained' ? 'none' : `5px solid ${theme.colors.background.primary}`};
      color: ${theme.colors.background.primary};
      outline: none;
      backdrop-filter: blur(4px);
      cursor: pointer;
      text-transform: uppercase;
      text-align: center;
      text-decoration: none;
      padding: 10px 0;
      width: 350px;
      @media only screen and (max-width: ${theme.breakpoints.lg}px) {
        width: 300px;
        padding: 8px 0;
        font-size: calc(0.9*${theme.typography.size.Button}px);
      }
    `
)

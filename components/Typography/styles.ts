import styled from 'styled-components'

import { Props } from './Typography'

type StyledProps = Pick<Props, 'variant' | 'fontWeight' | 'color'>

export const StyledTypography = styled.div<StyledProps>`
  font-size: ${p => {
    switch (p.variant) {
      case 'h1':
        return `${p.theme.typography.size.H1}px`
      case 'h2':
        return `${p.theme.typography.size.H2}px`
      case 'h3':
        return `${p.theme.typography.size.H3}px`
      case 'h4':
        return `${p.theme.typography.size.H4}px`
      case 'body':
        return `${p.theme.typography.size.Body}px`
      case 'menu':
        return `${p.theme.typography.size.Menu}px`
      case 'button':
        return `${p.theme.typography.size.Button}px`
      case 'caption':
        return `${p.theme.typography.size.Caption}px`
      default:
        return `${p.theme.typography.size.Body}px`
    }
  }};

  font-weight: ${p => (p.fontWeight === 'bold' ? p.theme.typography.weight.Bold : p.theme.typography.weight.Normal)};

  color: ${p => (p.color === 'primary' ? p.theme.colors.text.primary : p.theme.colors.text.primary)};
`

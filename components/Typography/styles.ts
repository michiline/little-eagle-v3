import styled from 'styled-components'
import { TypographyProps } from './Typography'

type StyledTypographyProps = Pick<TypographyProps, 'variant' | 'fontWeight' | 'color'>

export const StyledTypography = styled.div<StyledTypographyProps>`
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
      case 'caption':
        return `${p.theme.typography.size.Caption}px`
      default:
        return `${p.theme.typography.size.Body}px`
    }
  }};
  @media only screen and (max-width: ${p => p.theme.breakpoints.xl}px) {
    font-size: ${p => {
      switch (p.variant) {
        case 'h1':
          return `${p.theme.typography.size.H1 * 0.8}px`
        case 'h2':
          return `${p.theme.typography.size.H2 * 0.8}px`
        case 'h3':
          return `${p.theme.typography.size.H3 * 0.8}px`
      }
    }};
  }
  @media only screen and (max-width: ${p => p.theme.breakpoints.lg}px) {
    font-size: ${p => {
      switch (p.variant) {
        case 'body':
          return `${p.theme.typography.size.Body * 0.9}px`
      }
    }};
  }

  @media only screen and (max-width: ${p => p.theme.breakpoints.md}px) {
    font-size: ${p => {
      switch (p.variant) {
        case 'h1':
          return `${p.theme.typography.size.H1 * 0.65}px`
        case 'h2':
          return `${p.theme.typography.size.H2 * 0.65}px`
        case 'h3':
          return `${p.theme.typography.size.H3 * 0.65}px`
      }
    }};
  }

  font-family: ${p => {
    switch (p.variant) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
        return `${p.theme.typography.family.primary}`
      case 'body':
      case 'menu':
      case 'caption':
        return `${p.theme.typography.family.secondary}`
      default:
        return `${p.theme.typography.family.secondary}`
    }
  }};

  font-weight: ${p => (p.fontWeight === 'bold' ? p.theme.typography.weight.Bold : p.theme.typography.weight.Normal)};

  color: ${p => {
    switch (p.color) {
      case 'dark':
        return `${p.theme.colors.text.primary}`
      case 'light':
        return `${p.theme.colors.background.primary}`
      case 'footer':
        return `${p.theme.colors.background.secondary}`
      case 'menu':
        return `${p.theme.colors.menu}`
      default:
        return `${p.theme.colors.text.primary}px`
    }
  }};
  line-height: 1.5;
  margin-bottom: 0.4em;
`

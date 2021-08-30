import styled, { CSSObject } from '@emotion/styled'
import { TTheme } from '@src/providers'

type TProps = {
  variant: 'primary' | 'secondary' | 'footer' | 'footer-white'
}

const convertVariantToStyles = (theme: TTheme, variant: TProps['variant']): CSSObject => {
  switch (variant) {
    case 'primary':
      return {
        color: theme.color['link-primary'],
        fontWeight: theme.text.weight['semi-bold'],
      }
    case 'secondary':
      return {
        color: theme.color['link-secondary'],
        fontWeight: theme.text.weight['regular'],
      }
    case 'footer': {
      return {
        color: theme.color['text'],
        fontSize: theme.text.size.small.fontSize,
        lineHeight: theme.text.size.small.lineHeight,
      }
    }
    case 'footer-white': {
      return {
        color: theme.color['light-text'],
        fontSize: theme.text.size.small.fontSize,
        lineHeight: theme.text.size.small.lineHeight,
      }
    }
  }
}

export const StyledContainer = styled('a')<TProps>(({ variant, theme }) => {
  return {
    ...convertVariantToStyles(theme, variant),
    fontSize: '1.4rem',
    lineHeight: '1.8rem',
    textDecoration: 'none',
  }
})

export type TLinkStylesProps = TProps

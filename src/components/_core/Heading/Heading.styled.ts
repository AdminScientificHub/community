import styled, { CSSObject } from '@emotion/styled'
import { TTheme } from '@src/providers'
import { TColorTokenEnum, TTextWeightTokenEnum } from '@src/utils'

type TProps = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'page-title' | 'section-title'
  color?: TColorTokenEnum
  weight?: TTextWeightTokenEnum
}

export const VARIANT_TO_HEADING_LEVEL: { [key in TProps['variant']]: React.ElementType<any> } = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  'page-title': 'h2',
  'section-title': 'h3',
}

const getHeadingStyle = (
  theme: TTheme,
  variant: TProps['variant'],
  color: TProps['color'],
  weight: TProps['weight'],
): CSSObject => {
  switch (variant) {
    case 'h1':
      return {
        fontSize: '4.8rem',
        lineHeight: '6rem',
        fontWeight: weight ? theme.text.weight[weight] : 700,
        color: color ? theme.color[color] : theme.color['dark-text'],
      }
    case 'h2':
      return {
        fontSize: '2.2rem',
        lineHeight: '2.8rem',
        fontWeight: weight ? theme.text.weight[weight] : 500,
        color: color ? theme.color[color] : theme.color.text,
      }
    case 'h3':
      return {
        fontSize: '1.3rem',
        lineHeight: '1.8rem',
        fontWeight: weight ? theme.text.weight[weight] : 500,
        textTransform: 'uppercase',
        color: color ? theme.color[color] : theme.color.text,
      }
    case 'h4':
      return {
        fontSize: '1.6rem',
        lineHeight: '2rem',
        fontWeight: weight ? theme.text.weight[weight] : 700,
        color: color ? theme.color[color] : theme.color['dark-text'],
      }
    case 'page-title':
      return {
        fontSize: '3.4rem',
        lineHeight: '4.8rem',
        fontWeight: weight ? theme.text.weight[weight] : 700,
        color: color ? theme.color[color] : theme.color.text,
      }
    case 'section-title': {
      const defaultBorderStyles: CSSObject = {
        content: "''",
        width: '100%',
        height: theme.border.size.xxsmall,
        position: 'absolute',
        bottom: `-${theme.spacing.large}`,
        left: 0,
      }

      return {
        display: 'flex',
        fontSize: '2.2rem',
        lineHeight: '2.8rem',
        fontWeight: weight ? theme.text.weight[weight] : 700,
        color: color ? theme.color[color] : theme.color['dark-text'],
        position: 'relative',
        marginBottom: theme.spacing.large,

        span: {
          position: 'relative',
          '&:after': {
            ...defaultBorderStyles,
            backgroundColor: theme.color['dark-text'],
            zIndex: 2,
          },
        },

        '&:after': {
          ...defaultBorderStyles,
          backgroundColor: theme.color.border,
          zIndex: 1,
        },
      }
    }
  }
}

export const StyledHeading = styled('div')<TProps>(({ theme, variant, color, weight }) => {
  return { ...getHeadingStyle(theme, variant, color, weight) }
})

export type THeadingStylesProps = TProps

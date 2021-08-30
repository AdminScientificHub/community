import styled, { CSSObject } from '@emotion/styled'
import { TTheme } from '@src/providers'
import { TBorderRadiusTokenEnum } from '@src/utils'

type TProps = {
  variant: 'primary' | 'secondary'
  radius: TBorderRadiusTokenEnum
  size: 'medium' | 'small'
}

const getVariantStyles = (theme: TTheme, variant: TProps['variant']): CSSObject => {
  switch (variant) {
    case 'primary':
      return {
        backgroundColor: theme.color['btn-primary'],
        color: theme.color['light-text'],
      }
    case 'secondary':
      return {
        backgroundColor: theme.color['btn-secondary'],
        color: theme.color.text,
      }
  }
}

const getSizeStyles = (theme: TTheme, size: TProps['size']): CSSObject => {
  switch (size) {
    case 'medium':
      return {
        height: '3.2rem',
        padding: `${theme.spacing.xsmall} ${theme.spacing.small}`,
        fontSize: '1.3rem',
        lineHeight: '2',
      }
    case 'small':
      return {
        height: '2.4rem',
        padding: `${theme.spacing.xxxsmall} ${theme.spacing.xsmall}`,
        fontSize: '1.3rem',
        lineHeight: '2rem',
      }
  }
}

export const StyledContainer = styled('button')<TProps>(({ theme, variant, radius, size }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    border: 'none',
    cursor: 'pointer',
    borderRadius: theme.border.radius[radius],
    ...getSizeStyles(theme, size),
    ...getVariantStyles(theme, variant),
  }
})

export type TButtonStylesProps = TProps

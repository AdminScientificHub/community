import styled, { CSSObject } from '@emotion/styled'
import { rgba } from 'emotion-rgba'
import {
  TColorTokenEnum,
  TGapTokenEnum,
  TElevationTokenEnum,
  TBorderRadiusTokenEnum,
  TBorderSizeTokenEnum,
  TSpacingTokenEnum,
} from '@src/utils'
import { TFlexProps } from '.'
import { TTheme } from '@src/providers'

type TSpacing =
  | {
      horizontal?: TSpacingTokenEnum
      vertical?: TSpacingTokenEnum
      right?: TSpacingTokenEnum
      left?: TSpacingTokenEnum
      top?: TSpacingTokenEnum
      bottom?: TSpacingTokenEnum
    }
  | TSpacingTokenEnum

type TProps = {
  direction: 'column' | 'row'
  justify: 'initial' | 'end' | 'start' | 'center' | 'between'
  align: 'initial' | 'end' | 'start' | 'center'
  overflow: 'initial' | 'auto' | 'hidden'
  position: 'initial' | 'relative'
  $wrap: boolean
  gap: TGapTokenEnum
  elevation: TElevationTokenEnum
  background: TColorTokenEnum | { opacity: number; color: TColorTokenEnum }
  margin: TSpacing
  padding: TSpacing
  flex: boolean
  height: number
  width: number
  maxWidth: 'initial' | number
  border: {
    radius?: TBorderRadiusTokenEnum
    color?: TColorTokenEnum
    size?: TBorderSizeTokenEnum
  }
}

const convertAlignTokenToStyle = (align: TProps['justify'] | TProps['align']) => {
  switch (align) {
    case 'between':
      return 'space-between'
    case 'end':
      return 'flex-end'
    case 'start':
      return 'flex-start'
    case 'center':
      return 'center'
    case 'initial':
      return 'initial'
  }
}

const convertGapTokenToStyle = (theme: TTheme, gap: TProps['gap']): CSSObject => ({
  gap: theme.gap[gap],
})

const convertColorTokenToStyle = (theme: TTheme, background: TProps['background']) => {
  if (typeof background === 'string') {
    return theme.color[background]
  }

  return rgba(theme.color[background.color], background.opacity)
}

const convertMaxWidthToStyle = (maxWidth: TProps['maxWidth']) => {
  if (typeof maxWidth === 'string') {
    return 'initial'
  }

  return `${maxWidth}rem`
}

const convertBorderToStyle = (theme: TTheme, border: TProps['border']): CSSObject => {
  const borderRadius =
    border.radius && border.radius !== 'none' ? theme.border.radius[border.radius] : null

  return {
    ...(borderRadius && {
      borderRadius,
    }),
    ...(border.size &&
      border.size !== 'none' && {
        border: `${theme.border.size[border.size]} solid ${theme.color[border.color || 'border']}`,
      }),
  }
}

const convertSpacingToStyle = (theme: TTheme, spacing: TProps['padding'] | TProps['margin']) => {
  if (typeof spacing === 'string') {
    return theme.spacing[spacing]
  }

  const hor = spacing.horizontal ? theme.spacing[spacing.horizontal] : null
  const ver = spacing.vertical ? theme.spacing[spacing.vertical] : null

  if (ver && hor) {
    return `${ver} ${hor}`
  }

  if (hor) {
    return `0 ${hor}`
  }

  if (ver) {
    return `${ver} 0`
  }

  return `${spacing.top ? theme.spacing[spacing.top] : '0'} ${
    spacing.right ? theme.spacing[spacing.right] : '0'
  } ${spacing.bottom ? theme.spacing[spacing.bottom] : '0'} ${
    spacing.left ? theme.spacing[spacing.left] : '0'
  }`
}

export const StyledContainer = styled('div')<TProps & TFlexProps>(
  ({
    theme,
    direction: flexDirection,
    justify,
    align,
    gap,
    background,
    elevation,
    overflow,
    maxWidth,
    border,
    padding: paddingValue,
    margin: marginValue,
    onClick,
    height,
    width,
    flex,
    $wrap,
  }) => {
    const padding = convertSpacingToStyle(theme, paddingValue)
    const margin = convertSpacingToStyle(theme, marginValue)

    return {
      overflow,
      flexDirection,
      flex: flex ? '1 1' : '0 0 auto',
      display: 'flex',
      boxShadow: theme.elevation[elevation],
      maxWidth: convertMaxWidthToStyle(maxWidth),
      alignItems: convertAlignTokenToStyle(align),
      justifyContent: convertAlignTokenToStyle(justify),
      backgroundColor: convertColorTokenToStyle(theme, background),
      ...convertBorderToStyle(theme, border),
      ...convertGapTokenToStyle(theme, gap),
      ...($wrap && {
        flexWrap: 'wrap',
      }),
      ...(onClick && { cursor: 'pointer' }),
      ...(height && {
        height: `${height}rem`,
      }),
      ...(width && {
        width: `${width}rem`,
      }),
      ...(margin && { margin }),
      ...(padding && { padding }),
    }
  },
)

export type TFlexStylesProps = TProps

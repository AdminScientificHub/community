import styled, { CSSObject } from '@emotion/styled'
import { rgba } from 'emotion-rgba'
import {
  COLOR_TO_VALUE,
  GAP_TO_SIZE,
  TColorTokenEnum,
  TGapTokenEnum,
  TElevationTokenEnum,
  ELEVATION_TO_VALUE,
  TBorderTokenEnum,
  TSpacingTokenEnum,
} from '@src/utils'
import { TFlexProps } from '.'

type TProps = {
  direction: 'column' | 'row'
  justify: 'initial' | 'end' | 'start' | 'center' | 'between'
  align: 'initial' | 'end' | 'start' | 'center'
  overflow: 'initial' | 'auto' | 'hidden'
  gap: TGapTokenEnum
  elevation: TElevationTokenEnum
  background: TColorTokenEnum | { opacity: number; color: TColorTokenEnum }
  margin: { horizontal?: TSpacingTokenEnum; vertical?: TSpacingTokenEnum }
  padding: { horizontal?: TSpacingTokenEnum; vertical?: TSpacingTokenEnum }
  maxWidth: 'initial' | number
  border: {
    radius?: TBorderTokenEnum
    color: TColorTokenEnum
    size: TBorderTokenEnum
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

const convertGapTokenToStyle = (dir: TProps['direction'], gap: TProps['gap']): CSSObject => {
  const size = `${GAP_TO_SIZE[gap]}rem`
  const marginBottom = dir === 'column' ? size : 0
  const marginRight = dir === 'row' ? size : 0

  return {
    '& > *': {
      marginBottom,
      marginRight,

      '&:last-child': {
        marginBottom: 0,
        marginRight: 0,
      },
    },
  }
}

const convertColorTokenToStyle = (background: TProps['background']) => {
  if (typeof background === 'string') {
    return COLOR_TO_VALUE[background]
  }

  return rgba(COLOR_TO_VALUE[background.color], background.opacity)
}

const convertMaxWidthToStyle = (maxWidth: TProps['maxWidth']) => {
  if (typeof maxWidth === 'string') {
    return 'initial'
  }

  return `${maxWidth}rem`
}

const convertBorderToStyle = (border: TProps['border']): CSSObject => {
  return {
    ...(border.radius && {
      borderRadius: `${border.radius}rem`,
      border: `${border.size} solid ${border.color}`,
    }),
  }
}

const convertSpacingToStyle = ({ vertical, horizontal }: TProps['padding'] | TProps['margin']) => {
  const hor = `${horizontal}rem`
  const ver = `${vertical}rem`

  if (horizontal && vertical) {
    return `${ver} ${hor}`
  }

  if (horizontal) {
    return `0 ${hor}`
  }

  if (vertical) {
    return `${hor} 0`
  }

  return 'initial'
}

export const StyledContainer = styled('div')<TProps & TFlexProps>(
  ({
    direction,
    justify,
    align,
    gap,
    background,
    elevation,
    overflow,
    maxWidth,
    border,
    padding,
    margin,
    onClick,
  }) => {
    return {
      overflow,
      display: 'flex',
      flexDirection: direction,
      boxShadow: ELEVATION_TO_VALUE[elevation],
      margin: convertSpacingToStyle(margin),
      padding: convertSpacingToStyle(padding),
      maxWidth: convertMaxWidthToStyle(maxWidth),
      alignItems: convertAlignTokenToStyle(align),
      justifyContent: convertAlignTokenToStyle(justify),
      backgroundColor: convertColorTokenToStyle(background),
      ...convertBorderToStyle(border),
      ...convertGapTokenToStyle(direction, gap),
      ...(onClick && { cursor: 'pointer' }),
    }
  },
)

export type TFlexStylesProps = TProps

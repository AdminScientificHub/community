import { CSSObject } from '@emotion/react'
import {
  COLOR_TO_VALUE,
  TColorTokenEnum,
  TEXT_SIZE_TO_VALUE,
  TEXT_WEIGHT_TO_VALUE,
  TTextSizeTokenEnum,
  TTextWeightTokenEnum,
} from '.'

type TProps = {
  size: TTextSizeTokenEnum
  weight: TTextWeightTokenEnum
  textAlign: 'initial' | 'center' | 'right' | 'left'
  color: TColorTokenEnum
  ellipsis?: boolean
}

const getEllipsisStyle = (ellipsis: TProps['ellipsis']): CSSObject => {
  if (!ellipsis) {
    return {}
  }

  return { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }
}

const convertSizeTokenToStyle = (size: TProps['size']): CSSObject => {
  const { fontSize, lineHeight } = TEXT_SIZE_TO_VALUE[size]

  return {
    fontSize: `${fontSize}rem`,
    lineHeight: `${lineHeight}rem`,
  }
}

export const getDefaultTextStyle = ({
  textAlign,
  color,
  weight,
  size,
  ellipsis,
}: TProps): CSSObject => {
  return {
    textAlign,
    color: COLOR_TO_VALUE[color],
    weight: TEXT_WEIGHT_TO_VALUE[weight],
    ...convertSizeTokenToStyle(size),
    ...getEllipsisStyle(ellipsis),
  }
}

export const TEXT_DEFAULT_PROPS: TProps = {
  ellipsis: false,
  weight: 'regular',
  textAlign: 'initial',
  size: 'medium',
  color: 'text',
}

export type TDefaultTextProps = TProps

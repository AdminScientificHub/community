import { CSSObject } from '@emotion/react'

export type TBreakpointTokenEnum = 'desktop' | 'tablet' | 'small-tablet' | 'mobile'

export const BREAKPOINT_TO_VALUE: { [key in TBreakpointTokenEnum]: number } = {
  desktop: 144,
  tablet: 90,
  'small-tablet': 72,
  mobile: 55,
}

export const reponsiveStyle = (size: TBreakpointTokenEnum, style: CSSObject): CSSObject => {
  return {
    [`@media (max-width: ${size}rem)`]: {
      ...style,
    },
  }
}

import { CSSObject } from '@emotion/react'
import { BREAKPOINT_TO_VALUE, TBreakpointTokenEnum } from './_tokens/breakpoint'

export const reponsiveStyle = (size: TBreakpointTokenEnum, style: CSSObject): CSSObject => {
  return {
    [`@media (max-width: ${BREAKPOINT_TO_VALUE[size]}0px)`]: {
      ...style,
    },
  }
}

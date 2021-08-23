import styled from '@emotion/styled'
import { getDefaultTextStyle, TDefaultTextProps } from '@src/utils'

type TProps = {} & TDefaultTextProps

export const StyledContainer = styled('span')<TProps>(props => {
  return {
    ...getDefaultTextStyle(props),
  }
})

export type TSpanStylesProps = TProps

import styled from '@emotion/styled'
import { getDefaultTextStyle, TDefaultTextProps } from '@src/utils'

type TProps = {} & TDefaultTextProps

export const StyledContainer = styled('p')<TProps>(props => {
  return {
    ...getDefaultTextStyle(props),
  }
})

export type TParagraphStylesProps = TProps

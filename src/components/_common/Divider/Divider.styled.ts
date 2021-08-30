import styled from '@emotion/styled'
import { Flex } from '@src/components/_core'
import { TBorderSizeTokenEnum } from '@src/utils'

type TProps = {
  size: TBorderSizeTokenEnum
}

export const StyledContainer = styled(Flex)<TProps>(({ size, theme }) => {
  return {
    borderBottom: `${theme.border.size[size]} solid ${theme.color.border}`,
  }
})

export type TDividerStylesProps = TProps

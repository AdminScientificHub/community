import styled from '@emotion/styled'
import { TGapTokenEnum } from '@src/utils'
import { Flex } from '../Flex'

type TProps = {
  itemPerRow: number
  gap: TGapTokenEnum
}

export const StyledContainer = styled(Flex)<TProps>(({ theme, itemPerRow, gap }) => {
  const gapSize = gap ? theme.gap[gap] : '0px'
  const itemWidth = `calc(${100 / itemPerRow}% - ${gapSize} / ${itemPerRow} * ${itemPerRow - 1})`

  const nthChild = `&:nth-child(${itemPerRow}n)`
  const topMargin = `&:nth-child(n+${itemPerRow + 1})`

  return {
    '& > *': {
      flex: `0 0 ${itemWidth} !important`,

      '&:last-child': {
        flex: `0 0 ${itemWidth} !important`,
      },

      [nthChild]: {
        marginRight: 0,
      },
      [topMargin]: {
        marginTop: `${gapSize} !important`,
      },
    },
  }
})

export type TGridStylesProps = TProps

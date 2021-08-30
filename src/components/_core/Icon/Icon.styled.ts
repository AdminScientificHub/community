import styled from '@emotion/styled'
import { TColorTokenEnum, TIconSizeTokenEnum } from '@src/utils'

type TProps = {
  color: TColorTokenEnum
  size: TIconSizeTokenEnum
}

export const StyledContainer = styled('div')<TProps>(({ theme, color, size }) => {
  return {
    svg: {
      fill: theme.color[color],
      height: `${theme.icon[size]}rem`,
    },
  }
})

export type TIconStylesProps = TProps

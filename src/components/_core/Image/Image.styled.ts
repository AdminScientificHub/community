import styled from '@emotion/styled'

type TProps = {
  height: number
  width: number
}

export const StyledImage = styled('img')<TProps>(({ height, width }) => {
  return {
    height: height ? `${height}rem` : '100%',
    width: width ? `${width}rem` : '100%',
    objectFit: 'cover',
  }
})

export type TImageStylesProps = TProps

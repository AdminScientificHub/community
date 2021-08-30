import styled from '@emotion/styled'
import { rgba } from 'emotion-rgba'

type TProps = {
  isActive: boolean
  height?: string | number
  top?: string | number
}

const convertHeightToStyles = (height: TProps['height']) => {
  if (typeof height === 'string') {
    return height
  }

  return `${height}rem`
}

const convertTopToStyles = (top: TProps['top']) => {
  if (typeof top === 'string') {
    return top
  }

  return `${top}rem`
}

export const StyledContainer = styled('div')<TProps>(({ theme, isActive, height, top }) => {
  return {
    transition: 'background-color .2s ease',
    height: 0,
    width: 0,
    backgroundColor: 'transparent',
    zIndex: 999,
    maxWidth: 'initial !important',

    ...(isActive && {
      position: 'absolute',
      left: '0',
      right: '0',
      width: '100%',
      backgroundColor: rgba(theme.color['dark-background'], 0.25),
      height: convertHeightToStyles(height),
      top: convertTopToStyles(top),
    }),
  }
})

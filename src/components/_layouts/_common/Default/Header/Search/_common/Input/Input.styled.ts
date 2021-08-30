import styled from '@emotion/styled'
import { Flex } from '@src/components/_core'
import { lightenDarkenColor } from '@src/utils'

export const StyledContainer = styled(Flex)<{ isActive: boolean }>(({ theme, isActive }) => {
  return {
    transition: 'all .2s ease',
    transform: 'scale(1.05)',
    zIndex: isActive ? 2 : 1,

    ...(!isActive && {
      '&:hover': {
        backgroundColor: lightenDarkenColor(theme.color['light-background'], -20),
      },
    }),
  }
})

export const StyledInput = styled('input')<{ isActive: boolean }>(({ isActive }) => {
  return {
    border: 'none',
    background: 'transparent',
    fontSize: '1.2rem',
    lineHeight: '1.6rem',
    fontWeight: 600,

    '&:focus': {
      outline: 'none',
      background: 'transparent',
    },

    '&::placeholder': {
      fontWeight: 500,
    },

    ...(!isActive && {
      cursor: 'pointer',
    }),
  }
})

export const StyledLabel = styled('label')(() => {
  return {
    fontSize: '1.2rem',
    lineHeight: '1.6rem',
    fontWeight: 600,
    letterSpacing: 0.25,
    cursor: 'pointer',
  }
})

export const StyledCleanInputButton = styled(Flex)(() => {
  return {
    position: 'absolute',
    right: '1.8rem',
  }
})

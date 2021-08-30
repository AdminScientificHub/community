import styled from '@emotion/styled'
import { Flex } from '@src/components/_core'

export const StyledContainer = styled(Flex)(({ theme }) => {
  return {
    transition: 'all .2s ease',
    '&:hover': {
      boxShadow: theme.elevation.xsmall,
    },
  }
})

export const StyledInput = styled('input')(({ theme }) => {
  const { fontSize, lineHeight } = theme.text.size.medium

  return {
    border: 'none',
    width: '100%',
    fontSize: `${fontSize}rem`,
    lineHeight: `${lineHeight}rem`,

    '&:focus': {
      outline: 'none',
    },
  }
})

export const StyledSearchContainer = styled(Flex)(({ theme }) => {
  return {
    '& > *': {
      flex: '0 1 auto',
      padding: `0 ${theme.spacing.medium}`,

      '&:first-child': {
        paddingLeft: 0,
      },

      '&:last-child': {
        paddingRight: 0,
      },

      '&:not(:last-child)': {
        borderRight: `${theme.border.size.xxsmall} solid ${theme.color.border}`,
      },
    },
  }
})

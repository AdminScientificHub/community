import styled from '@emotion/styled'
import { Flex, Heading } from '@src/components/_core'

export const StyledContainer = styled(Flex)(({ theme }) => {
  return {
    [`@media ${theme.breakpoint.smallTablet}`]: {
      flexDirection: 'column-reverse',
    },
  }
})

export const StyledIllustrationContainer = styled('div')(({ theme }) => {
  return {
    svg: {
      height: '47.5rem',

      [`@media ${theme.breakpoint.tablet}`]: {
        height: '30rem',
      },
    },
  }
})

export const StyledHeading = styled(Heading)(({ theme }) => {
  return {
    fontSize: '12rem',
    lineHeight: '1.1',
    fontWeight: 500,

    [`@media ${theme.breakpoint.tablet}`]: {
      fontSize: '8rem',
    },
  }
})

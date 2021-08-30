import styled from '@emotion/styled'
import { Flex } from '@src/components/_core'
import { reponsiveStyle } from '@src/utils'

export const StyledContainer = styled(Flex)(({ theme }) => {
  return {
    height: '100vh',

    '& > *': {
      paddingRight: `${theme.spacing.huge} !important`,
      paddingLeft: `${theme.spacing.huge} !important`,

      ...reponsiveStyle('tablet', {
        paddingRight: `${theme.spacing.xxlarge} !important`,
        paddingLeft: `${theme.spacing.xxlarge} !important`,
      }),
      ...reponsiveStyle('small-tablet', {
        paddingRight: `${theme.spacing.large} !important`,
        paddingLeft: `${theme.spacing.large} !important`,
      }),
      ...reponsiveStyle('mobile', {
        paddingRight: `${theme.spacing.large} !important`,
        paddingLeft: `${theme.spacing.large} !important`,
      }),

      '& > *': {
        maxWidth: '119rem !important',
      },
    },
  }
})

export const StyledContentContainer = styled(Flex)(({ theme }) => {
  return {
    marginTop: `calc(8rem + ${theme.spacing.xlarge})`,
  }
})

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

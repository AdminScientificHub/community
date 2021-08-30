import styled from '@emotion/styled'
import { Flex } from '@src/components/_core'

export const StyledContainer = styled(Flex)(({ theme }) => {
  return {
    position: 'fixed',
    width: '100%',
    zIndex: 9999999,

    '& > *': {
      width: '100%',
    },
  }
})

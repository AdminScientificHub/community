import styled from '@emotion/styled'
import { Flex } from '@src/components/_core'

export const StyledContentContainer = styled(Flex)(({ theme }) => {
  return {
    border: `${theme.border.size.xxsmall} solid ${theme.color.border}`,
    borderBottom: 'none',
  }
})

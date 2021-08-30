import styled from '@emotion/styled'
import { Flex } from '@src/components/_core'

export const StyledContainer = styled(Flex)(() => {
  return {}
})

export const StyledSeparator = styled(Flex)(({ theme }) => {
  return {
    height: '100%',
    borderRight: `${theme.border.size.xxsmall} solid ${theme.color.border}`,
  }
})

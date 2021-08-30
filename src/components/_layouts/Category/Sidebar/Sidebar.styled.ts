import styled from '@emotion/styled'
import { Flex } from '@src/components/_core'

export const StyledContainer = styled(Flex)(({ theme }) => {
  return {
    position: 'sticky',
    top: 0,
    marginTop: `-${theme.spacing.xlarge}`,
    paddingTop: theme.spacing.xlarge,
  }
})

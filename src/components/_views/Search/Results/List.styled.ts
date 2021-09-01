import styled from '@emotion/styled'
import { Flex } from '@src/components/_core'

export const StyledContainer = styled(Flex)(({ theme }) => {
  return {
    '& > *': {
      '&:not(:last-child)': {
        paddingBottom: theme.spacing.large,
        marginBottom: theme.spacing.large,
        borderBottom: `${theme.border.size.xxsmall} solid ${theme.color.border}`,
      },
    },
  }
})

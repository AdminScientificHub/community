import styled from '@emotion/styled'
import { Link } from '@src/components/_core'

export const StyledLink = styled(Link)(({ theme }) => {
  return {
    padding: theme.spacing['small'],
    backgroundColor: 'transparent',
    borderRadius: theme.border.radius['xlarge'],
    transition: 'all .2s ease',

    '&:hover': {
      backgroundColor: theme.color['light-background'],
    },
  }
})

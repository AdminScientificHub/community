import styled from '@emotion/styled'

export const StyledSearchBtn = styled('button')(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'row',
    height: '4.8rem',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.color.primary,
    borderRadius: theme.border.radius.huge,
    margin: `0 ${theme.spacing.xsmall} 0 ${theme.spacing.large}`,
    padding: theme.spacing.medium,
    gap: theme.gap.xsmall,
    border: 'none',
    cursor: 'pointer',
    position: 'relative',

    '&:focus': {
      outline: 'none',
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: theme.border.radius.huge,
        border: `${theme.border.size.xsmall} solid ${theme.color['dark-primary']}`,
      },
    },
  }
})

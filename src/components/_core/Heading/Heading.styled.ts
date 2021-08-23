import styled, { CSSObject } from '@emotion/styled'

type TProps = {
  as: 'h1' | 'h2' | 'h3'
}

const getHeadingStyle = (as: TProps['as']): CSSObject => {
  switch (as) {
    case 'h1':
      return {
        fontSize: '4.8rem',
        lineHeight: '6rem',
        fontWeight: 700,
      }
    case 'h2':
      return {
        fontSize: '2.2rem',
        lineHeight: '2.8rem',
        fontWeight: 600,
      }
    case 'h3':
      return {
        fontSize: '1.3rem',
        lineHeight: '1.8rem',
        fontWeight: 500,
        textTransform: 'uppercase',
      }
  }
}

export const StyledHeading = styled('div')<TProps>(({ as }) => {
  return { ...getHeadingStyle(as) }
})

export type THeadingStylesProps = TProps

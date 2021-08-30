import React, { FunctionComponent } from 'react'
import NextLink from 'next/link'
import { StyledContainer, TLinkStylesProps } from './Link.styled'

type TProps = {
  href: string
  as?: string
  target?: '_blank'
  title?: string
  onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
}

export const Link: FunctionComponent<TProps & Partial<TLinkStylesProps>> = ({
  href,
  as,
  ...props
}) => {
  return (
    <NextLink href={href} as={as} passHref>
      <StyledContainer {...(props as TLinkStylesProps)} />
    </NextLink>
  )
}

Link.defaultProps = {
  variant: 'primary',
}

export type TLinkProps = TProps

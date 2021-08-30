import React, { FunctionComponent } from 'react'
import { StyledHeading, THeadingStylesProps, VARIANT_TO_HEADING_LEVEL } from './Heading.styled'

type TProps = {}

export const Heading: FunctionComponent<TProps & Partial<THeadingStylesProps>> = ({
  children,
  ...props
}) => {
  return (
    <StyledHeading
      as={VARIANT_TO_HEADING_LEVEL[props.variant as THeadingStylesProps['variant']]}
      {...(props as THeadingStylesProps)}
    >
      {props.variant === 'section-title' ? <span>{children}</span> : children}
    </StyledHeading>
  )
}

export type THeadingProps = TProps

import React, { FunctionComponent } from 'react'
import { StyledHeading, THeadingStylesProps } from './Heading.styled'

type TProps = {}

export const Heading: FunctionComponent<TProps & Partial<THeadingStylesProps>> = ({ ...props }) => {
  return <StyledHeading {...(props as THeadingStylesProps)} />
}

export type THeadingProps = TProps

import { TEXT_DEFAULT_PROPS } from '@src/utils'
import React, { FunctionComponent } from 'react'
import { StyledContainer, TSpanStylesProps } from './Span.styled'

type TProps = {
  title?: string
}

export const Span: FunctionComponent<TProps & Partial<TSpanStylesProps>> = ({ ...props }) => {
  return <StyledContainer {...(props as TSpanStylesProps)} />
}

Span.defaultProps = TEXT_DEFAULT_PROPS

export type TSpanProps = TProps

import React, { FunctionComponent } from 'react'
import { StyledContainer, TDividerStylesProps } from './Divider.styled'

type TProps = {}

export const Divider: FunctionComponent<TProps & Partial<TDividerStylesProps>> = ({ ...props }) => {
  return <StyledContainer flex={false} {...(props as TDividerStylesProps)} />
}

Divider.defaultProps = {
  size: 'xxsmall',
}

export type TDividerProps = TProps

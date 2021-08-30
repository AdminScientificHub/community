import React, { FunctionComponent } from 'react'
import { TFlexProps } from '../Flex'
import { StyledContainer, TGridStylesProps } from './Grid.styled'

type TProps = {} & TFlexProps

export const Grid: FunctionComponent<TProps & Partial<TGridStylesProps>> = ({ ...props }) => {
  return <StyledContainer direction="row" {...(props as TGridStylesProps)} />
}

Grid.defaultProps = {
  itemPerRow: 3,
  gap: 'none',
}

export type TGridProps = TProps

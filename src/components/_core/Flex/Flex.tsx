import React, { FunctionComponent } from 'react'
import { StyledContainer, TFlexStylesProps } from './Flex.styled'

type TProps = {
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  forwardRef?: React.Ref<HTMLDivElement>
  tabIndex?: number
  as?: 'footer' | 'header' | 'section'
  wrap?: boolean
} & Partial<Omit<TFlexStylesProps, '$wrap'>>

export const Flex: FunctionComponent<TProps> = ({ forwardRef, wrap, ...props }) => {
  return (
    <StyledContainer {...(props as TFlexStylesProps)} $wrap={wrap as boolean} ref={forwardRef} />
  )
}

Flex.defaultProps = {
  direction: 'row',
  justify: 'initial',
  align: 'initial',
  gap: 'none',
  background: 'none',
  elevation: 'none',
  overflow: 'initial',
  position: 'initial',
  maxWidth: 'initial',
  padding: {},
  margin: {},
  border: {
    radius: 'none',
    color: 'none',
    size: 'none',
  },
  flex: true,
  wrap: false,
}

export type TFlexProps = TProps

import React, { FunctionComponent } from 'react'
import { StyledContainer, TFlexStylesProps } from './Flex.styled'

type TProps = {
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  forwardRef?: React.Ref<HTMLDivElement>
}

export const Flex: FunctionComponent<TProps & Partial<TFlexStylesProps>> = ({
  forwardRef,
  ...props
}) => {
  return <StyledContainer ref={forwardRef} {...(props as TFlexStylesProps)} />
}

Flex.defaultProps = {
  direction: 'row',
  justify: 'initial',
  align: 'initial',
  gap: 'none',
  background: 'none',
  elevation: 'none',
  overflow: 'initial',
  maxWidth: 'initial',
  padding: {},
  margin: {},
  border: {
    radius: 'none',
    color: 'none',
    size: 'none',
  },
}

export type TFlexProps = TProps

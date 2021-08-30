import React, { FunctionComponent } from 'react'
import { StyledContainer, TIconStylesProps } from './Icon.styled'

type TProps = {
  icon: any
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export const Icon: FunctionComponent<TProps & Partial<TIconStylesProps>> = ({ icon, ...props }) => {
  return (
    <StyledContainer {...(props as TIconStylesProps)}>{React.createElement(icon)}</StyledContainer>
  )
}

Icon.defaultProps = {
  color: 'text',
  size: 'medium',
}

export type TIconProps = TProps

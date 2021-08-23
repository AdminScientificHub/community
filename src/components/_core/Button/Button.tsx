import React, { FunctionComponent } from 'react'
import { StyledContainer, TButtonStylesProps } from './Button.styled'

type TProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Button: FunctionComponent<TProps & Partial<TButtonStylesProps>> = ({ ...props }) => {
  return <StyledContainer {...(props as TButtonStylesProps)} />
}

export type TButtonProps = TProps

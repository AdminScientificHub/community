import React, { FunctionComponent } from 'react'
import { StyledContainer, TButtonStylesProps } from './Button.styled'

type TProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Button: FunctionComponent<TProps & Partial<TButtonStylesProps>> = ({ ...props }) => {
  return <StyledContainer suppressHydrationWarning {...(props as TButtonStylesProps)} />
}

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
}

export type TButtonProps = TProps

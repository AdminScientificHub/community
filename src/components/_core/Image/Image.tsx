import React, { FunctionComponent } from 'react'
import { StyledImage, TImageStylesProps } from './Image.styled'

type TProps = {
  src: string
  alt: string
}

export const Image: FunctionComponent<TProps & Partial<TImageStylesProps>> = ({ ...props }) => {
  return <StyledImage {...(props as TImageStylesProps)} />
}

Image.defaultProps = {
  height: 0,
  width: 0,
}

export type TImageProps = TProps

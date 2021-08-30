import React, { FunctionComponent } from 'react'
import { Flex } from '@src/components/_core'
import { StyledLink } from './Nav.styled'

type TProps = {}

export const HeaderNav: FunctionComponent<TProps> = () => {
  return (
    <Flex flex={false}>
      <StyledLink href="/">Write</StyledLink>
    </Flex>
  )
}

export type THeaderNavProps = TProps

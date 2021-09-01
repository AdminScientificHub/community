import React, { FunctionComponent } from 'react'
import { Flex } from '@src/components/_core'
import { StyledLink } from './Nav.styled'

type TProps = {}

export const HeaderNav: FunctionComponent<TProps> = () => {
  return (
    <Flex flex={false}>
      <StyledLink variant="primary" target="_blank" href="https://app.scientifichub.io/">
        Write
      </StyledLink>
    </Flex>
  )
}

export type THeaderNavProps = TProps

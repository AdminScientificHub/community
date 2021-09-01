import { Flex, Icon } from '@src/components/_core'
import React, { FunctionComponent } from 'react'
import ReactTooltip from 'react-tooltip'
import { StyledContainer } from './Menu.styled'

import MenuIcon from '@src/assets/icons/menu.svg'
import UserIcon from '@src/assets/icons/user.svg'

type TProps = {}

export const UserAccountMenu: FunctionComponent<TProps> = () => {
  return (
    <>
      <ReactTooltip place="bottom" id="header" />
      <StyledContainer
        flex={false}
        border={{ size: 'xxsmall', color: 'border', radius: 'xlarge' }}
        padding={{ horizontal: 'xsmall', vertical: 'xsmall' }}
        height={4.2}
        align="center"
        justify="center"
        direction="row"
        gap="medium"
        onClick={() => console.log('TODO')}
        data-tip="Not available at the moment"
        data-for="header"
      >
        <Flex padding={{ left: 'small' }} flex={false}>
          <Icon icon={MenuIcon} />
        </Flex>
        <Flex
          width={3}
          height={3}
          border={{ radius: 'huge' }}
          align="center"
          justify="center"
          background="text"
        >
          <Icon color="light-text" icon={UserIcon} />
        </Flex>
      </StyledContainer>
    </>
  )
}

export type TUserAccountMenuProps = TProps

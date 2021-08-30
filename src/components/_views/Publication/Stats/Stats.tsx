import { Flex, Icon, Paragraph } from '@src/components/_core'
import React, { FunctionComponent } from 'react'

import FireworkIcon from '@src/assets/icons/firework.svg'
import ViewIcon from '@src/assets/icons/view.svg'
import { getNumberWithSpaces } from '@src/utils'

type TProps = {}

export const PublicationViewStats: FunctionComponent<TProps> = () => {
  return (
    <Flex direction="row" gap="large">
      <Flex direction="row" gap="xxsmall" align="center" flex={false}>
        <Icon icon={ViewIcon} />
        {/* TODO */}
        <Paragraph size="small">{getNumberWithSpaces(4254)}</Paragraph>
      </Flex>
      <Flex direction="row" gap="xxsmall" align="center" flex={false}>
        <Icon icon={FireworkIcon} />
        {/* TODO */}
        <Paragraph size="small">{getNumberWithSpaces(189)}</Paragraph>
      </Flex>
    </Flex>
  )
}

export type TStatsProps = TProps

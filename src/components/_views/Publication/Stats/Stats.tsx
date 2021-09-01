import { Flex, Icon, Paragraph } from '@src/components/_core'
import React, { FunctionComponent } from 'react'

// import FireworkIcon from '@src/assets/icons/firework.svg'
import ViewIcon from '@src/assets/icons/view.svg'
import { getNumberWithSpaces } from '@src/utils'
import { TPublicationStats } from '@src/components/publication/_types'

type TProps = TPublicationStats

export const PublicationViewStats: FunctionComponent<TProps> = ({ reads }) => {
  return (
    <Flex direction="row" gap="large">
      <Flex direction="row" gap="xxsmall" align="center" flex={false}>
        <Icon icon={ViewIcon} />
        <Paragraph size="small">{getNumberWithSpaces(reads)}</Paragraph>
      </Flex>
      {/** TODO */}
      {/* <Flex direction="row" gap="xxsmall" align="center" flex={false}>
        <Icon icon={FireworkIcon} />
        <Paragraph size="small">{getNumberWithSpaces(189)}</Paragraph>
      </Flex> */}
    </Flex>
  )
}

export type TStatsProps = TProps

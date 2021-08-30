import { Flex, Icon } from '@src/components/_core'
import React, { FunctionComponent } from 'react'

import TwitterIcon from '@src/assets/icons/twitter.svg'
import FacebookIcon from '@src/assets/icons/facebook.svg'
import LinkedinIcon from '@src/assets/icons/linkedin.svg'
import LinkIcon from '@src/assets/icons/link.svg'

type TProps = {}

export const SocialMedias: FunctionComponent<TProps> = () => {
  return (
    <Flex direction="row" gap="small" flex={false}>
      <Icon onClick={() => console.log('TODO')} icon={TwitterIcon} />
      <Icon onClick={() => console.log('TODO')} icon={FacebookIcon} />
      <Icon onClick={() => console.log('TODO')} icon={LinkedinIcon} />
      <Icon onClick={() => console.log('TODO')} icon={LinkIcon} />
    </Flex>
  )
}

export type TSocialMediasProps = TProps

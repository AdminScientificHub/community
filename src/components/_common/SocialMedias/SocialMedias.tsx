import { Flex, Icon } from '@src/components/_core'
import React, { FunctionComponent, useMemo } from 'react'

import TwitterIcon from '@src/assets/icons/twitter.svg'
import FacebookIcon from '@src/assets/icons/facebook.svg'
import LinkedinIcon from '@src/assets/icons/linkedin.svg'

import { TPublication } from '@src/components/publication/_types'
import { env } from '@src/utils'
import { getPublicationUrl } from '@src/components/publication'

type TProps = {} & TPublication

export const SocialMedias: FunctionComponent<TProps> = ({ id, title, description }) => {
  const twitterLink = useMemo(() => {
    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `${title} ${`${env.COMMUNITY_URL}${getPublicationUrl(title, id)}`}`,
    )}`
  }, [id, title])

  const linkedinLink = useMemo(() => {
    return `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      `${env.COMMUNITY_URL}${getPublicationUrl(title, id)}`,
    )}&title=${encodeURIComponent(title)}&summary=${description}&source=LinkedIn`
  }, [id, title, description])

  const facebookLink = useMemo(() => {
    return `https://www.facebook.com/sharer.php?t=${encodeURIComponent(title || '')}&u=${`${
      env.COMMUNITY_URL
    }${getPublicationUrl(title, id)}`}`
  }, [title, id])

  return (
    <Flex direction="row" gap="small" flex={false}>
      <a href={twitterLink} target="_blank" rel="noreferrer">
        <Icon icon={TwitterIcon} />
      </a>
      <a href={linkedinLink} target="_blank" rel="noreferrer">
        <Icon icon={LinkedinIcon} />
      </a>
      <a href={facebookLink} target="_blank" rel="noreferrer">
        <Icon icon={FacebookIcon} />
      </a>
    </Flex>
  )
}

export type TSocialMediasProps = TProps

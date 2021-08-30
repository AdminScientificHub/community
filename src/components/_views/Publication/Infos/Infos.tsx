import { TPublication } from '@src/components/publication/_types'
import { Thumbnail } from '@src/components/_common'
import { SocialMedias } from '@src/components/_common'
import { Flex, Paragraph } from '@src/components/_core'
import { formatToDate, getReadTime } from '@src/utils'
import moment from 'moment'
import React, { FunctionComponent } from 'react'

type TProps = {
  publication: TPublication
  mainAuthor?: TPublication['authors'][0]
}

export const PublicationInfos: FunctionComponent<TProps> = ({ publication, mainAuthor }) => {
  return (
    <>
      <Flex direction="row" gap="small" align="center">
        <Thumbnail size="large" firstName={mainAuthor?.firstName} />
        <Flex direction="column">
          <Paragraph size="small" color="dark-text" weight="semi-bold">
            {mainAuthor?.firstName} {mainAuthor?.lastName}
          </Paragraph>
          <Flex direction="row" gap="xxsmall" align="center">
            <Paragraph size="small">
              {formatToDate(moment.utc(publication?.publishedAt.toDate()).toString())}
            </Paragraph>
            <Paragraph size="small">·</Paragraph>
            <Paragraph size="small">{getReadTime(publication.content)}min read</Paragraph>
          </Flex>
        </Flex>
        <SocialMedias />
      </Flex>
    </>
  )
}
export type TPublicationInfosProps = TProps

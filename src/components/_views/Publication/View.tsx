import React, { FunctionComponent, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/dist/client/router'

import { TPublication } from '@src/components/publication/_types'
import { Divider, SocialMedias, TextEditor } from '@src/components/_common'

import { Button, Flex, Heading, Image } from '@src/components/_core'
import { getPublication } from '@src/services'

import { PublicationInfos } from './Infos'

import { PublicationViewAuthor } from './Author'
import { PublicationViewStats } from './Stats'

import { RelatedPublication } from './RelatedPublication'
import { useScreenSize } from '@src/utils/hooks'

type TProps = {}

export const PublicationView: FunctionComponent<TProps> = () => {
  const [publication, setPublication] = useState<TPublication | null>(null)

  const { query } = useRouter()
  const { isMobile } = useScreenSize()

  const publicationId = useMemo(() => {
    const splittedQuery = ((query.publicationId || '') as string).split('-')

    return splittedQuery[splittedQuery.length - 1]
  }, [query.publicationId])

  const mainAuthor = useMemo(() => {
    return publication?.authors.find(author => author.type === 'PRINCIPAL')
  }, [publication])

  useEffect(() => {
    let cancel = false

    async function fetchPublication() {
      if (cancel || !publicationId) {
        return
      }

      const fetchedPublication = await getPublication(publicationId, () => console.log('TODO'))

      setPublication(fetchedPublication)
    }

    fetchPublication()

    return () => {
      cancel = true
    }
  }, [publicationId, query, setPublication])

  if (!publication) {
    return <></>
  }

  return (
    <Flex direction="column" gap="xxlarge" align="center">
      <Flex
        maxWidth={68}
        margin={{ horizontal: isMobile ? 'none' : 'xxlarge' }}
        direction="column"
        gap="large"
      >
        <Heading variant="h1">{publication.title}</Heading>
        <Heading variant="h2">{publication.description}</Heading>
        <Flex direction="column" gap="xxlarge">
          <PublicationInfos publication={publication} mainAuthor={mainAuthor} />
          <Image src={publication.coverUrl} alt="" height={45} />
          <TextEditor editable={false} content={publication.content} />
          <Flex wrap direction="row" gap="xsmall">
            {publication.tags.map(tag => (
              <Button radius="xsmall" variant="secondary" key={tag.value}>
                {tag.label}
              </Button>
            ))}
          </Flex>
        </Flex>
        <Flex direction="row" justify="between">
          <PublicationViewStats />
          <SocialMedias />
        </Flex>
        <Divider />
        <PublicationViewAuthor mainAuthor={mainAuthor} />
      </Flex>
      <RelatedPublication publication={publication} />
    </Flex>
  )
}

export type TPublicationViewProps = TProps

import React, { FunctionComponent, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/dist/client/router'

import { TPublication, TPublicationStats } from '@src/components/publication/_types'
import { Divider, SocialMedias, TextEditor } from '@src/components/_common'

import { Button, Flex, Heading, Image, Link } from '@src/components/_core'
import { getPublication } from '@src/services'

import { PublicationInfos } from './Infos'

import { PublicationViewAuthor } from './Author'
import { PublicationViewStats } from './Stats'

import { RelatedPublication } from './RelatedPublication'
import { useScreenSize } from '@src/utils/hooks'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { noop } from 'lodash'

type TProps = {}

export const PublicationView: FunctionComponent<TProps> = () => {
  const [publication, setPublication] = useState<TPublication | null>(null)
  const [stats, setStats] = useState<TPublicationStats | null>(null)

  const { query } = useRouter()
  const { isMobile } = useScreenSize()

  const publicationId = useMemo(() => {
    const splittedQuery = ((query.publicationId || '') as string).split('-')

    return splittedQuery[splittedQuery.length - 1]
  }, [query.publicationId])

  const mainAuthor = useMemo(() => {
    return publication?.authors.find(author => author.type === 'PRINCIPAL')
  }, [publication])

  // Fetch stats
  useEffect(() => {
    if (!publicationId) {
      return
    }

    const db = firebase.firestore()
    const ref = db.collection('publicationStats').doc(publicationId)

    ref.onSnapshot(d => setStats(d.data() as TPublicationStats))
  }, [publicationId])

  // Increment publication vue
  useEffect(() => {
    if (!publicationId) {
      return
    }

    const publications = localStorage.getItem('publications')

    const currentPublication = publications
      ? JSON.parse(publications).find((pId: string) => pId === publicationId)
      : null

    if (currentPublication) {
      return
    }

    const db = firebase.firestore()
    const ref = db.collection('publicationStats').doc(publicationId)

    const increment = firebase.firestore.FieldValue.increment(1)

    ref.update({ reads: increment })

    if (publications) {
      localStorage.setItem(
        'publications',
        JSON.stringify([...JSON.parse(publications), publicationId]),
      )

      return
    }

    localStorage.setItem('publications', JSON.stringify([publicationId]))
  }, [publicationId])

  // Fetch publication
  useEffect(() => {
    let cancel = false

    async function fetchPublication() {
      if (cancel || !publicationId) {
        return
      }

      const fetchedPublication = await getPublication(publicationId, noop)
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
          {!!publication.tags.length && (
            <Flex wrap direction="row" gap="xsmall">
              {publication.tags.map(tag => (
                <Link key={tag.value} href={`/tag/${tag.value.toLowerCase()}`}>
                  <Button radius="xsmall" variant="secondary">
                    {tag.label}
                  </Button>
                </Link>
              ))}
            </Flex>
          )}
        </Flex>
        <Flex direction="row" justify="between">
          {stats && <PublicationViewStats {...stats} />}
          <SocialMedias {...publication} />
        </Flex>
        <Divider />
        <PublicationViewAuthor mainAuthor={mainAuthor} />
      </Flex>
      <RelatedPublication publication={publication} />
    </Flex>
  )
}

export type TPublicationViewProps = TProps

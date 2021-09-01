import { PublicationItem } from '@src/components/publication'
import { TPublication } from '@src/components/publication/_types'
import { AlgoliaInstantSearch, Divider } from '@src/components/_common'
import { Flex, Heading } from '@src/components/_core'
import { useAlgoliaSearch } from '@src/utils/hooks'
import { useRouter } from 'next/dist/client/router'
import React, { FunctionComponent, useEffect, useMemo, useState } from 'react'
import { MostPopularPublication } from './MostPopular'
import { InfiniteHitsProvided } from 'react-instantsearch-core'
import { useCategorySidebarContext } from '@src/providers'
import { capitalizeFirstLetter } from '@src/utils'

type TProps = {}

const LatestPublication: FunctionComponent<InfiniteHitsProvided<TPublication>> = ({ hits }) => {
  if (!hits.length) {
    return <></>
  }

  return (
    <Flex direction="column" gap="medium" margin={{ bottom: 'huge' }}>
      <Flex direction="column" gap="xsmall">
        <Heading variant="h3" color="dark-text" weight="bold">
          Latest
        </Heading>
        <Divider />
      </Flex>
      <Flex direction="column" gap="large">
        {hits.map(hit => (
          <PublicationItem variant="medium" key={hit.id} {...hit} />
        ))}
      </Flex>
    </Flex>
  )
}

export const TagView: FunctionComponent<TProps> = () => {
  const [mostPopularPublication, setMostPopularPublication] = useState<TPublication | null>(null)

  const router = useRouter()
  const { setTitle, setSections } = useCategorySidebarContext()

  const { tag } = useMemo(() => {
    if (!router.query.tagName) {
      return {
        tag: null,
      }
    }

    return {
      tag: {
        label: capitalizeFirstLetter(router.query.tagName as string),
        value: (router.query.tagName as string).toUpperCase(),
      },
    }
  }, [router.query.tagName])

  const { results } = useAlgoliaSearch<TPublication>('publications', {
    facetFilters: [
      `tags.value: ${tag?.value}`,
      `id:-${mostPopularPublication?.id}`,
      'status: PUBLISHED',
    ],
    hitsPerPage: 5,
    shouldLoad: !!(tag && mostPopularPublication?.id),
  })

  useEffect(() => {
    if (!tag) {
      return
    }

    const relatedTags = results
      .map(result =>
        result.tags.map(t => ({ label: t.label, url: `/tag/${t.label.toLocaleLowerCase()}` })),
      )
      .flat()
      .filter(t => t.label !== tag.label)

    setTitle(tag.label)
    setSections([
      { title: 'Related tags', items: relatedTags, type: 'nav' },
      { title: `Popular in ${tag.label}`, publications: results, type: 'publication' },
    ])
  }, [results, setSections, setTitle, tag])

  const algoliaFilters = useMemo(() => {
    const filters = ['status:PUBLISHED']

    if (tag) {
      filters.push(`tags.value: ${tag.value}`)
    }

    if (results.length) {
      results.forEach(res => filters.push(`id:-${res.id}`))
    }

    if (mostPopularPublication) {
      filters.push(`id:-${mostPopularPublication.id}`)
    }

    return filters.join(' AND ')
  }, [mostPopularPublication, results, tag])

  if (!tag) {
    return <></>
  }

  return (
    <Flex direction="column" gap="xlarge">
      <MostPopularPublication updateMostPopularPublication={setMostPopularPublication} tag={tag} />
      {mostPopularPublication && (
        <AlgoliaInstantSearch
          indexName="publications"
          filters={algoliaFilters}
          component={LatestPublication}
          infiniteScroll
        />
      )}
    </Flex>
  )
}

export type TTagViewProps = TProps

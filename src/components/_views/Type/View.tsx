import { PUBLICATION_TYPE_FULL_DATA } from '@src/components/publication/constants'
import { TPublication } from '@src/components/publication/_types'
import { AlgoliaInstantSearch, Divider } from '@src/components/_common'
import { Flex, Heading } from '@src/components/_core'
import { useCategorySidebarContext } from '@src/providers'
import { useAlgoliaSearch } from '@src/utils/hooks'
import { useRouter } from 'next/dist/client/router'
import React, { FunctionComponent, useEffect, useMemo, useState } from 'react'
import { MostPopularPublication } from './MostPopular'
import { InfiniteHitsProvided } from 'react-instantsearch-core'
import { PublicationItem } from '@src/components/publication'

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

export const TypeView: FunctionComponent<TProps> = () => {
  const [mostPopularPublication, setMostPopularPublication] = useState<TPublication | null>(null)

  const router = useRouter()
  const { setTitle, setDescription, setSections } = useCategorySidebarContext()

  const { type, otherTypes } = useMemo(() => {
    const typeName = router.query.typeName as string

    const [selectedType] = PUBLICATION_TYPE_FULL_DATA.filter(t => t.url === typeName)

    if (!selectedType) {
      return {
        type: null,
        otherTypes: [],
      }
    }

    return {
      type: selectedType,
      otherTypes: PUBLICATION_TYPE_FULL_DATA.filter(t => t.url !== typeName),
    }
  }, [router])

  const { results } = useAlgoliaSearch<TPublication>('publications', {
    facetFilters: [
      `type: ${type?.value}`,
      `id:-${mostPopularPublication?.id}`,
      'status: PUBLISHED',
    ],
    hitsPerPage: 5,
    shouldLoad: !!(type?.value && mostPopularPublication?.id),
  })

  useEffect(() => {
    if (!type) {
      return
    }

    setTitle(type.label)
    setDescription(type.description)
    setSections([
      { title: 'Other document type', items: otherTypes, type: 'nav' },
      { title: `Popular in ${type?.label}`, publications: results, type: 'publication' },
    ])
  }, [otherTypes, results, setDescription, setSections, setTitle, type])

  const algoliaFilters = useMemo(() => {
    const filters = ['status:PUBLISHED']

    if (type) {
      filters.push(`type: ${type.value}`)
    }

    if (results.length) {
      results.forEach(res => filters.push(`id:-${res.id}`))
    }

    if (mostPopularPublication) {
      filters.push(`id:-${mostPopularPublication.id}`)
    }

    return filters.join(' AND ')
  }, [mostPopularPublication, results, type])

  if (!type) {
    return <></>
  }

  return (
    <Flex direction="column" gap="xlarge">
      <MostPopularPublication
        updateMostPopularPublication={setMostPopularPublication}
        type={type}
      />
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

export type TTypeViewProps = TProps

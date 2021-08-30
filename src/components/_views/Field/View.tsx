import { useCategorySidebarContext } from '@src/providers'
import { getFieldFromName, getSelectedTopicFromName } from '@src/components/publication/_utils'
import { useRouter } from 'next/dist/client/router'
import React, { FunctionComponent, useEffect, useMemo, useState } from 'react'
import { useAlgoliaSearch } from '@src/utils/hooks'
import { TPublication } from '@src/components/publication/_types'
import { Flex, Heading } from '@src/components/_core'

import { MostPopularPublication } from './MostPopular/'
import { AlgoliaInstantSearch, Divider } from '@src/components/_common'
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

export const FieldView: FunctionComponent<TProps> = () => {
  const [mostPopularPublication, setMostPopularPublication] = useState<TPublication | null>(null)
  const router = useRouter()

  const { setTitle, setDescription, setSections } = useCategorySidebarContext()

  const { field, otherTopics } = useMemo(() => {
    const fieldName = router.query.fieldName as string

    const selectedField = getFieldFromName(fieldName)

    if (!selectedField) {
      // TODO : Redirect to 404
      return { field: null, otherTopics: [] }
    }

    const topics = getSelectedTopicFromName(selectedField.value)
      .areas.filter(area => area.value !== selectedField.value)
      .map(area => ({ ...area, url: `/field/${area.url}` }))

    return {
      field: selectedField,
      otherTopics: topics,
    }
  }, [router.query])

  const { results } = useAlgoliaSearch<TPublication>('publications', {
    // TODO: CHANGE LABEL TO VALUE
    facetFilters: [
      `fields.value: ${field?.label}`,
      `id:-${mostPopularPublication?.id}`,
      'status: PUBLISHED',
    ],
    hitsPerPage: 5,
    shouldLoad: !!(field?.value && mostPopularPublication?.id),
  })

  useEffect(() => {
    if (!field) {
      return
    }

    setTitle(field.label)
    setDescription(field.description)
    setSections([
      { title: 'Related Topics', items: otherTopics, type: 'nav' },
      { title: `Popular in ${field?.label}`, publications: results, type: 'publication' },
    ])
  }, [field, otherTopics, results, setDescription, setSections, setTitle])

  if (!field) {
    return <></>
  }

  return (
    <Flex direction="column" gap="xlarge">
      <MostPopularPublication
        updateMostPopularPublication={setMostPopularPublication}
        field={field}
      />
      <AlgoliaInstantSearch
        indexName="publications"
        filters={`status:PUBLISHED AND fields.value: ${field.label} AND ${results
          .map(res => `id:-${res.id}`)
          .join(' AND ')}`}
        component={LatestPublication}
        infiniteScroll
      />
    </Flex>
  )
}

export type TFieldViewProps = TProps

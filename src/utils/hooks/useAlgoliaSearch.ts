import algoliaClient from 'algoliasearch/lite'
import { debounce } from 'lodash'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { env } from '../libs'

type TProps = {
  query?: string
  facetFilters?: string | string[]
  hitsPerPage?: number
  shouldLoad?: boolean
}

type TRes<T> = {
  results: T[]
  isLoading: boolean
  isFirstCall: boolean
}

type TAlgoliaIndexEnum = 'publications'

export function useAlgoliaSearch<T>(index: TAlgoliaIndexEnum, params?: TProps): TRes<T> {
  const [isFirstCall, setIsFirstCall] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState<T[]>([])

  const algolia = useMemo(() => {
    return algoliaClient(env.ALGOLIA_APP_ID, env.ALGOLIA_SEARCH_KEY).initIndex(index)
  }, [index])

  const search = (querySearch: string, facetFilters?: string | string[]) => {
    return algolia.search(
      querySearch,
      params && {
        facetFilters,
        hitsPerPage: params.hitsPerPage || 10,
      },
    )
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateResults = useCallback(
    debounce((currentQuery, facetFilters) => {
      search(currentQuery, facetFilters).then(({ hits, ...props }) => {
        setResults(hits as any)
        setIsFirstCall(false)
        setIsLoading(false)
      })
    }, 500),
    [],
  )

  useEffect(() => {
    if (params?.query?.length === 0 && results.length > 0) {
      setResults([])
      setIsLoading(false)
    }
  }, [params?.query?.length, results.length])

  useEffect(() => {
    const query = params?.query

    if (
      ((typeof query === 'string' && query.length > 0) || typeof query !== 'string') &&
      typeof params?.shouldLoad === 'boolean'
        ? params?.shouldLoad
        : true
    ) {
      setIsLoading(true)
      updateResults(params?.query, params?.facetFilters)
    } else {
      setIsLoading(false)
    }
    // HACK to handle array in dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(params?.facetFilters), params?.query, params?.shouldLoad, updateResults])

  return {
    results,
    isLoading,
    isFirstCall,
  }
}

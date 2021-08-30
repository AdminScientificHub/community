import { Flex, Heading, Paragraph } from '@src/components/_core'
import { useRouter } from 'next/dist/client/router'
import React, { FunctionComponent, useMemo } from 'react'

type TProps = {}

export const SearchView: FunctionComponent<TProps> = () => {
  const router = useRouter()

  const params = useMemo(() => {
    return {
      query: router.query.q as string,
    }
  }, [router.query.q])

  console.log('params', params)

  return (
    <Flex direction="column" gap="xlarge">
      <Flex direction="column" gap="xxsmall">
        <Paragraph size="small">300+ publications</Paragraph>
        <Heading variant="h2" color="dark-text" weight="semi-bold">
          Publications matching: {params.query}
        </Heading>
      </Flex>
    </Flex>
  )
}

export type TSearchViewProps = TProps

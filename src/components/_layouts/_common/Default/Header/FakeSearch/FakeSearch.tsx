import { Flex, Icon, Paragraph } from '@src/components/_core'
import React, { FunctionComponent, useEffect, useMemo, useRef } from 'react'
import { StyledContainer, StyledInput, StyledSearchContainer } from './FakeSearch.styled'
import { useScreenSize } from '@src/utils/hooks'

import SearchIcon from '@src/assets/icons/search.svg'
import LeftChevronIcon from '@src/assets/icons/left-chevron.svg'
import CloseIcon from '@src/assets/icons/close.svg'
import { useRouter } from 'next/dist/client/router'
import {
  PUBLICATION_FIELD_FULL_DATA,
  PUBLICATION_TYPE_FULL_DATA,
} from '@src/components/publication/constants'
import {
  TFullDataItem,
  TPublicationField,
  TPublicationType,
} from '@src/components/publication/_types'

type TProps = {
  searchQuery?: string
  setSearchQuery?: (query: string) => void
  activeHeader: () => void
  isHeaderActive?: boolean
  exitActiveHeader?: () => void
}

type TSearchProps = {
  query?: string
  field?: TFullDataItem<TPublicationField>
  type?: TFullDataItem<TPublicationType>
}

/////////////////
// Mobile
/////////////////
const FakeSearchMobile: FunctionComponent<TProps> = ({
  isHeaderActive,
  activeHeader,
  exitActiveHeader,
  searchQuery,
  setSearchQuery,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isHeaderActive && inputRef) {
      inputRef.current?.focus()
    }
  }, [isHeaderActive])

  const clearInput = () => {
    setSearchQuery && setSearchQuery('')
    inputRef.current?.focus()
  }

  if (isHeaderActive) {
    return (
      <Flex direction="row" gap="xsmall" align="center">
        <Flex padding="small" flex={false} onClick={exitActiveHeader}>
          <Icon size="small" color="dark-text" icon={LeftChevronIcon} />
        </Flex>
        <StyledInput
          value={searchQuery}
          onChange={e => setSearchQuery && setSearchQuery(e.target.value)}
          ref={inputRef}
          placeholder="What are you looking for ?"
        />
        <Flex
          flex={false}
          border={{ radius: 'huge' }}
          background="light-background"
          width={2}
          height={2}
          align="center"
          justify="center"
          onClick={clearInput}
        >
          <Icon icon={CloseIcon} size="xxsmall" />
        </Flex>
      </Flex>
    )
  }

  return (
    <Flex
      align="center"
      justify="center"
      direction="row"
      height={4.8}
      border={{ radius: 'huge' }}
      background="light-background"
      gap="xsmall"
      onClick={activeHeader}
    >
      <Icon size="xsmall" color="primary" icon={SearchIcon} />
      <Paragraph>What are you looking for ?</Paragraph>
    </Flex>
  )
}

/////////////////
// Desktop
/////////////////
const FakeSearchDesktop: FunctionComponent<Pick<TProps, 'activeHeader'> & TSearchProps> = ({
  activeHeader,
  query,
  field,
  type,
}) => {
  return (
    <StyledContainer
      height={4.8}
      border={{ size: 'xxsmall', color: 'border', radius: 'huge' }}
      align="center"
      padding={{ horizontal: 'xsmall' }}
      justify="between"
      elevation="xxsmall"
      onClick={activeHeader}
    >
      <Flex padding={{ horizontal: 'medium' }}>
        {!(query || field || type) ? (
          <Paragraph color="dark-text" weight="regular" size="small">
            Start a search
          </Paragraph>
        ) : (
          <StyledSearchContainer direction="row" align="center">
            <Paragraph
              color={query ? 'dark-text' : 'text'}
              weight={query ? 'semi-bold' : 'regular'}
              size="small"
              title={query}
              ellipsis
            >
              {query || 'Search'}
            </Paragraph>
            <Paragraph
              size="small"
              color={field ? 'dark-text' : 'text'}
              weight={field ? 'semi-bold' : 'regular'}
              title={field?.label}
              ellipsis
            >
              {field?.label || 'Field'}
            </Paragraph>
            <Paragraph
              size="small"
              color={type ? 'dark-text' : 'text'}
              weight={type ? 'semi-bold' : 'regular'}
              title={type?.label}
              ellipsis
            >
              {type?.label || 'Type'}
            </Paragraph>
          </StyledSearchContainer>
        )}
      </Flex>
      <Flex
        align="center"
        justify="center"
        width={3}
        height={3}
        background="primary"
        border={{ radius: 'huge' }}
        flex={false}
      >
        <Icon size="xsmall" color="light-text" icon={SearchIcon} />
      </Flex>
    </StyledContainer>
  )
}

export const FakeSearch: FunctionComponent<TProps> = ({
  isHeaderActive,
  searchQuery,
  activeHeader,
  exitActiveHeader,
  setSearchQuery,
}) => {
  const { isDesktop, isTablet } = useScreenSize()

  const router = useRouter()

  const { query, field, type } = useMemo(() => {
    const { query: q } = router

    return {
      query: q.q as string | undefined,
      field: PUBLICATION_FIELD_FULL_DATA.map(({ areas }) => areas)
        .flat()
        .find(area => area.url === q.field),
      type: PUBLICATION_TYPE_FULL_DATA.find(({ url }) => url === q.type),
    }
  }, [router])

  if (isDesktop || isTablet) {
    return <FakeSearchDesktop query={query} field={field} type={type} activeHeader={activeHeader} />
  }

  return (
    <FakeSearchMobile
      isHeaderActive={isHeaderActive}
      activeHeader={activeHeader}
      exitActiveHeader={exitActiveHeader}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    />
  )
}

export type TDefaultLayoutHeaderSearchProps = TProps

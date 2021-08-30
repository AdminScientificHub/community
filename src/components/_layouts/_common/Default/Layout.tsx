import { PublicationItem } from '@src/components/publication'
import { TPublication } from '@src/components/publication/_types'
import { Footer, Overlay } from '@src/components/_common'
import { Flex, Paragraph } from '@src/components/_core'
import { useAlgoliaSearch, useScreenSize } from '@src/utils/hooks'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { DefaultLayoutHeader } from './Header'
import { StyledContainer, StyledContentContainer } from './Layout.styled'

type TProps = {
  withFooter?: boolean
}

export const DefaultLayout: FunctionComponent<TProps> = ({ withFooter, children }) => {
  const [isHeaderActive, setIsHeaderActive] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const { isDesktop, isTablet } = useScreenSize()
  const { results } = useAlgoliaSearch<TPublication>('publications', {
    query: searchQuery,
    facetFilters: 'status:PUBLISHED',
    hitsPerPage: 10,
  })

  useEffect(() => {
    const closeOverlayOnScroll = () => {
      setIsHeaderActive(false)
    }

    if (isHeaderActive) {
      window.addEventListener('scroll', closeOverlayOnScroll)
    } else {
      setSearchQuery('')
      window.removeEventListener('scroll', closeOverlayOnScroll)
    }

    return () => window.removeEventListener('scroll', closeOverlayOnScroll)
  }, [isHeaderActive])

  return (
    <StyledContainer direction="column">
      <DefaultLayoutHeader
        searchQuery={searchQuery}
        isHeaderActive={isHeaderActive}
        activeHeader={() => setIsHeaderActive(true)}
        exitActiveHeader={() => setIsHeaderActive(false)}
        setSearchQuery={setSearchQuery}
      />
      <StyledContentContainer
        position="relative"
        flex={false}
        margin={{ top: 'xlarge' }}
        justify="center"
      >
        {(isDesktop || isTablet) && isHeaderActive && (
          <Overlay
            height="calc(100% - 18rem)"
            top={18}
            isActive={isHeaderActive}
            closeOverlay={() => setIsHeaderActive(false)}
          />
        )}
        {isHeaderActive && !(isDesktop || isTablet) ? (
          <Flex direction="column">
            {results.length ? (
              results.map(publication => <PublicationItem key={publication.id} {...publication} />)
            ) : (
              <Paragraph>No publication to show for the moment...</Paragraph>
            )}
          </Flex>
        ) : (
          children
        )}
      </StyledContentContainer>
      {!isHeaderActive && withFooter && <Footer />}
    </StyledContainer>
  )
}

DefaultLayout.defaultProps = {
  withFooter: true,
}

export const DefaultLayoutWithoutFooter: FunctionComponent<TProps> = ({ ...props }) => (
  <DefaultLayout withFooter={false} {...props} />
)

export type TDefaultLayoutProps = TProps

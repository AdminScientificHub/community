import React, { FunctionComponent } from 'react'
import { Flex, Link, Icon } from '@src/components/_core'
import { StyledContainer } from './Header.styled'

import LogoIcon from '@src/assets/icons/logo.svg'
import { UserAccountMenu } from './UserAccount'
import { HeaderNav } from './Navigation'
import { FakeSearch } from './FakeSearch'
import { DefaultHeaderSearch } from './Search'
import { useScreenSize } from '@src/utils/hooks'

type TProps = {
  searchQuery: string
  isHeaderActive: boolean
  activeHeader: () => void
  exitActiveHeader: () => void
  setSearchQuery: (query: string) => void
}

export const DefaultLayoutHeader: FunctionComponent<TProps> = ({
  isHeaderActive,
  searchQuery,
  activeHeader,
  exitActiveHeader,
  setSearchQuery,
}) => {
  const { isDesktop, isTablet } = useScreenSize()

  return (
    <StyledContainer
      height={isHeaderActive && (isDesktop || isTablet) ? 18 : 8}
      elevation="medium"
      align="center"
      flex={false}
      direction="column"
      background="background"
      overflow="hidden"
    >
      <Flex flex={false} height={8} justify="between" align="center">
        {(isDesktop || isTablet) && (
          <Flex>
            <Link href="/">
              <Icon icon={LogoIcon} size="small" />
            </Link>
          </Flex>
        )}

        {(!isHeaderActive || !(isDesktop || isTablet)) && (
          <FakeSearch
            isHeaderActive={isHeaderActive}
            activeHeader={activeHeader}
            exitActiveHeader={exitActiveHeader}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}
        {(isDesktop || isTablet) && (
          <Flex direction="row" gap="large" align="center" justify="end">
            <HeaderNav />
            <UserAccountMenu />
          </Flex>
        )}
      </Flex>
      {isHeaderActive && (isDesktop || isTablet) && (
        <Flex justify="center">
          <DefaultHeaderSearch exitActiveHeader={exitActiveHeader} />
        </Flex>
      )}
    </StyledContainer>
  )
}

export type TDefaultLayoutHeaderProps = TProps

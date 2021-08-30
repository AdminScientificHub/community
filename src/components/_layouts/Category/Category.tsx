import { Flex } from '@src/components/_core'
import { CategorySidebarProvider } from '@src/providers'

import React, { FunctionComponent } from 'react'
import { DefaultLayout } from '../_common'
import { CategorySidebar } from './Sidebar'

type TProps = {}

export const CategoryLayout: FunctionComponent<TProps> = ({ children }) => {
  return (
    <DefaultLayout withFooter={false}>
      <CategorySidebarProvider>
        <Flex direction="row" gap="xxlarge" align="start">
          <Flex>{children}</Flex>
          <CategorySidebar />
        </Flex>
      </CategorySidebarProvider>
    </DefaultLayout>
  )
}

export type TCategoryLayoutProps = TProps

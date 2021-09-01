import React from 'react'
import { Page } from '@src/utils'

import { SearchView } from '@src/components/_views'
import { DefaultLayoutWithoutFooter } from '@src/components/_layouts/_common'

const SearchPage: Page = () => <SearchView />

SearchPage.Layout = DefaultLayoutWithoutFooter

export default SearchPage

import React from 'react'
import { Page } from '@src/utils'
import { CategoryLayout } from '@src/components/_layouts'
import { SearchView } from '@src/components/_views'

const SearchPage: Page = () => <SearchView />

SearchPage.Layout = CategoryLayout

export default SearchPage

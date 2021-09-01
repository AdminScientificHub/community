import React from 'react'
import { Page } from '@src/utils'
import { CategoryLayout } from '@src/components/_layouts'
import { TagView } from '@src/components/_views'

const TagPage: Page = () => <TagView />

TagPage.Layout = CategoryLayout

export default TagPage

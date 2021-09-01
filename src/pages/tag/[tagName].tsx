import React from 'react'
import { Page } from '@src/utils'
import { CategoryLayout } from '@src/components/_layouts'
import { TagView } from '@src/components/_views'

const TypePage: Page = () => <TagView />

TypePage.Layout = CategoryLayout

export default TypePage

import React from 'react'
import { Page } from '@src/utils'

import { DefaultLayoutWithoutFooter } from '@src/components/_layouts/_common'
import { TypesView } from '@src/components/_views'

const TypesPage: Page = () => <TypesView />

TypesPage.Layout = DefaultLayoutWithoutFooter

export default TypesPage

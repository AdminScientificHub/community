import React from 'react'
import { Page } from '@src/utils'

import { NotFoundView } from '@src/components/_views/404/View'
import { DefaultLayout } from '@src/components/_layouts/_common'

const FieldPage: Page = () => <NotFoundView />

FieldPage.Layout = DefaultLayout

export default FieldPage

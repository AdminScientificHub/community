import React from 'react'
import { Page } from '@src/utils'

import { NotFoundView } from '@src/components/_views'
import { DefaultLayout } from '@src/components/_layouts/_common'

const ErrorPage: Page = () => <NotFoundView />

ErrorPage.Layout = DefaultLayout

export default ErrorPage

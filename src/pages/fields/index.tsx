import React from 'react'
import { Page } from '@src/utils'

import { DefaultLayoutWithoutFooter } from '@src/components/_layouts/_common'
import { FieldsView } from '@src/components/_views'

const Home: Page = () => <FieldsView />

Home.Layout = DefaultLayoutWithoutFooter

export default Home

import React from 'react'
import { Page } from '@src/utils'

import { DefaultLayoutWithoutFooter } from '@src/components/_layouts/_common'
import { FieldsView } from '@src/components/_views'

const FieldsPage: Page = () => <FieldsView />

FieldsPage.Layout = DefaultLayoutWithoutFooter

export default FieldsPage

import React from 'react'
import { Page } from '@src/utils'
import { CategoryLayout } from '@src/components/_layouts'
import { FieldView } from '@src/components/_views'

const FieldPage: Page = () => <FieldView />

FieldPage.Layout = CategoryLayout

export default FieldPage

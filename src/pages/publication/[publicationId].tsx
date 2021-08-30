import React from 'react'
import { Page } from '@src/utils'

import { DefaultLayout } from '@src/components/_layouts/_common'
import { PublicationView } from '@src/components/_views'

const Publication: Page = () => <PublicationView />

Publication.Layout = DefaultLayout

export default Publication

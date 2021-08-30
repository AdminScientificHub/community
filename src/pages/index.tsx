import React from 'react'
import { Page } from '@src/utils'
import { PublicationsLayout } from '@src/components/_layouts'

import { HomeView } from '@src/components/_views'

const Home: Page = () => <HomeView />

Home.Layout = PublicationsLayout

export default Home

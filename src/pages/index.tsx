import React from 'react'

import { Page } from '@src/utils'

const Home: Page = () => {
  return <div>Home</div>
}

Home.Layout = ({ children }) => {
  return <>{children}</>
}

export default Home

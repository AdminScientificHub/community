import React from 'react'
import AppType, { AppContext, AppInitialProps } from 'next/app'
import { Page } from '@src/utils/libs/nextjs'
import Head from 'next/head'
import { ReactElement } from 'react'
import { AppScripts } from '@src/utils/scripts'
import { GlobalStyles } from '@src/utils/styles/Global'

class App extends AppType<AppContext & AppInitialProps> {
  render(): ReactElement {
    const { Component, pageProps } = this.props

    const Layout = (Component as Page)?.Layout || null

    return (
      <>
        <Head>
          <AppScripts />
        </Head>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    )
  }
}

export default App

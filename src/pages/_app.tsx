import React from 'react'
import AppType, { AppContext, AppInitialProps } from 'next/app'
import { FirestoreProvider } from '@react-firebase/firestore'
import { env, Page } from '@src/utils/libs/nextjs'
import firebase from 'firebase/app'
import Head from 'next/head'
import { ReactElement } from 'react'
import { AppScripts } from '@src/utils/scripts'
import emotionReset from 'emotion-reset'
import { ThemeProvider } from '@src/providers'
import { css, Global } from '@emotion/react'
import 'firebase/firestore'

const FIREBASE_CONFIG = {
  apiKey: env.FIREBASE_API_KEY,
  authDomain: env.FIREBASE_AUTH_DOMAIN,
  projectId: env.FIREBASE_PROJECT_ID,
  storageBucket: env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID,
  appId: env.FIREBASE_APP_ID,
  measurementId: env.FIREBASE_MEASUREMENT_ID,
  databaseURL: '',
}

class App extends AppType<AppContext & AppInitialProps> {
  render(): ReactElement {
    const { Component, pageProps } = this.props

    const Layout = (Component as Page)?.Layout || null

    return (
      <>
        <Head>
          <AppScripts />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;600;700&family=Roboto:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Global
          styles={css`
            ${emotionReset}
            *, *::after, *::before {
              box-sizing: border-box;
              -moz-osx-font-smoothing: grayscale;
              -webkit-font-smoothing: antialiased;
              font-smoothing: antialiased;
            }

            html {
              font-size: 62.5%;
            }

            body {
              font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
                'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol';
              text-rendering: optimizeLegibility;
              -webkit-font-smoothing: antialiased;
              color: rgba(0, 0, 0, 0.8);
              position: relative;
              min-height: 100vh;
            }
          `}
        />
        <ThemeProvider>
          <FirestoreProvider {...FIREBASE_CONFIG} firebase={firebase}></FirestoreProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </>
    )
  }
}

export default App

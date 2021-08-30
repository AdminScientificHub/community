import { NextPage } from 'next'
import { FC } from 'react'
import getConfig from 'next/config'

export type LayoutProps = {
  wideContent?: boolean
  hideGoBack?: boolean
}

export type Page<T = {}, LayoutCustomProps extends LayoutProps = {}> = NextPage<T> & {
  Layout: FC<LayoutCustomProps>
}

const { publicRuntimeConfig } = getConfig()

type TEnv = {
  ALGOLIA_APP_ID: string
  ALGOLIA_SEARCH_KEY: string
  FIREBASE_API_KEY: string
  FIREBASE_AUTH_DOMAIN: string
  FIREBASE_PROJECT_ID: string
  FIREBASE_STORAGE_BUCKET: string
  FIREBASE_MESSAGING_SENDER_ID: string
  FIREBASE_APP_ID: string
  FIREBASE_MEASUREMENT_ID: string
}

export const env: TEnv = publicRuntimeConfig

'use client'
import { AppProps } from 'next/app'
import { NextPage } from 'next'

type ExtendedAppProps = AppProps & {
  Component: NextPage
}

export default function App(props: ExtendedAppProps) {
  const { Component, pageProps } = props

  return <>{Component && <Component {...pageProps} />}</>
}

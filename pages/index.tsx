import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Countries from "./Countries";

import React from "react";

interface AppState {
  items: any[],
  error: {message: string} | null,
  isLoaded: boolean
}

export default class Home extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

    render() {
      return (
        <div className={styles.container}>
          <Head>
            <title>Country Listing</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <h1 className={styles.title}>
           Countries
          </h1>
          <main className={styles.main}>
            <Countries />
          </main>
          <footer className={styles.footer}>
            <p>Brought to you by mZoo.org</p>
          </footer>
          </div>
      )
    }
}

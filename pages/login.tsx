import React from 'react';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';

import styles from '../styles/Login.module.css';
import GlobalStyles from '../src/styles/globals';
import light from '../src/styles/themes/light';
import dark from '../src/styles/themes/dark';

import usePersistedState from '../src/utils/usePersistedState';

import ArrowForwardIos from '@material-ui/icons/ArrowForwardIosRounded';

export default function login() {
  const [theme] = usePersistedState('theme', light);

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <GlobalStyles />
        <Head>
        <title>Login | Take Care</title>
        </Head>
      
        <img className={styles.bigLogo} src="/bigSimbol.png" alt="take care big simbol"/>
      
        <img className={styles.logoFull} src="/logo-full2.png" alt="take care logo"/>

        <div className={styles.loginContainer}>
          <h1>Bem-vindo</h1>
          <div>
            <img src="/Github.png" alt="github logo"/>
            <p>Faça login com seu Github<br/> para começar</p>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button type="button" className={styles.loginButton}>Acessar com Github</button>
          <span className={styles.arrowIcon}>
            <ArrowForwardIos fontSize="large" style={{ color: '#b2b9ff' }}/>
          </span>
        </div>
      </div>
    </ThemeProvider>
  )
}

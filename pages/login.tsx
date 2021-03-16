import React from 'react';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';

import styles from '../styles/Login.module.css';
import GlobalStyles from '../src/styles/globals';
import light from '../src/styles/themes/light';
import dark from '../src/styles/themes/dark';

import usePersistedState from '../src/utils/usePersistedState';

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

        <form className={styles.form}>
          <input type="text" id="inputName" placeholder="Informe seu username" />
        </form>
      </div>
    </ThemeProvider>
  )
}

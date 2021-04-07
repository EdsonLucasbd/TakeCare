import React from 'react';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';

import styles from '../src/styles/pages/Login.module.css';
import GlobalStyles from '../src/styles/globals';
import light from '../src/styles/themes/light';

import usePersistedState from '../src/utils/usePersistedState';

import ArrowForwardIos from '@material-ui/icons/ArrowForwardIosRounded';
import { signIn, useSession } from 'next-auth/client'
import Redirect from '../src/components/Redirect';


export default function login() {
  const [theme] = usePersistedState('theme', light);
  const [ session ] = useSession();
   
  if (session) return <Redirect to="/" />;

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <GlobalStyles />
        <Head>
        <title>Login | Take Care</title>
        </Head>
      
        <img className={styles.bigLogo} src="/bigSimbol.png" alt="take care big simbol"/>
      
        <div className={styles.loginContainer}>
          <img className={styles.logoFull} src="/logo-full.png" alt="take care logo"/>
          <h1>Bem-vindo</h1>
          <div>
            <p>Faça login com sua conta <strong>Github</strong> ou <strong>Google</strong> para começar</p>
          </div>

          {/* <button 
            onClick={() => signIn('auth0')} 
            className={styles.loginButton}>
            <span>Acessar o Take Care</span>
            <div className={styles.arrowIcon}>
              <ArrowForwardIos fontSize="large"/>
            </div>
          </button> */}

          <div className={styles.socialContainer}>
            <button 
              onClick={() => signIn('github')}
              className={styles.loginSocialButton}>
              <img className={styles.socialIcon} src="/github.png" alt="Github logo"/>
            </button>

            <button 
              onClick={() => signIn('google')}
              className={styles.loginSocialButton}>
              <img  className={styles.socialIcon} src="/google.png" alt="Github logo"/>
            </button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

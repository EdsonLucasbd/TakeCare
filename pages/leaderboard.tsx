import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/client'

import { SideBar } from '../src/components/SideBar';

import { ThemeProvider } from 'styled-components';

import usePersistedState from '../src/utils/usePersistedState';

import GlobalStyles from '../src/styles/globals';

import styles from '../src/styles/pages/Home.module.css';
import light from '../src/styles/themes/light';
import dark from '../src/styles/themes/dark';
import Redirect from '../src/components/Redirect';

export default function Home(props) {
  const [theme, setTheme] = usePersistedState('theme', light);
  const [ session ] = useSession();

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  
  console.log(session);
  // if (!session) {
  //   return <Redirect to="/login" />;
  // }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SideBar toggleTheme={toggleTheme}/>
      
      <div className={styles.container}>
        <Head>
          <title>Ranking | Take Care</title>
        </Head>
        {session && (
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            Logado como {session.user.email}
            <img src={`${session.user.image}`} alt='img' />
          </div>
        )}
      </div>
    </ThemeProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}
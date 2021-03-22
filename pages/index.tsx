import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { signIn, signOut, useSession } from 'next-auth/client'

import { CompletedChallenges } from '../src/components/CompletedChallenges';
import { CountDown } from '../src/components/CountDown';
import { ExperienceBar } from '../src/components/ExperienceBar';
import { Profile } from '../src/components/Profile';
import { ChallengeBox } from '../src/components/ChallengeBox';
import { SideBar } from '../src/components/SideBar';

import { CountDownProvider } from '../src/contexts/CountDownContext';
import { ChallengesProvider } from '../src/contexts/ChallengesContext';
import { ThemeProvider } from 'styled-components';

import usePersistedState from '../src/utils/usePersistedState';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

import GlobalStyles from '../src/styles/globals';

import styles from '../src/styles/pages/Home.module.css';
import light from '../src/styles/themes/light';
import dark from '../src/styles/themes/dark';
import Redirect from '../src/components/Redirect';

export default function Home(props) {
  const [theme, setTheme] = usePersistedState('theme', light);
  const [ session, loading ] = useSession();

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  
  if (!session) return <Redirect to="/login" />;
  
  return (
    
    <ThemeProvider theme={theme}>
      {session && 
      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
      >
        <GlobalStyles />
        <SideBar toggleTheme={toggleTheme}/>
        
        <div className={styles.container}>
          <Head>
            <title>Home | Take Care</title>
          </Head>

          <ExperienceBar />
          
          <CountDownProvider>
            <section>
              <div>
                <Profile/>
                <CompletedChallenges />
                <CountDown />
              </div>
              
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountDownProvider>
        </div>
      </ChallengesProvider>
      }
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
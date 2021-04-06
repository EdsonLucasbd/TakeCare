import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useSession } from 'next-auth/client'

import { SideBar } from '../src/components/SideBar';

import { ThemeProvider } from 'styled-components';

import usePersistedState from '../src/utils/usePersistedState';

import GlobalStyles from '../src/styles/globals';

import Redirect from '../src/components/Redirect';

import styles from '../src/styles/pages/Leaderboard.module.css';
import light from '../src/styles/themes/light';
import dark from '../src/styles/themes/dark';
import axios from 'axios';
import { RankingProfile, User } from '../src/components/RankingProfile';

export default function Leaderboard() {
  const [theme, setTheme] = usePersistedState('theme', light);
  const [users, setUsers] = useState<User[]>([]);
  const [ session ] = useSession();

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  
  if (!session) {
    return <Redirect to="/login" />;
  }

  useEffect(() => {
    async function getUsers() {
      const { data } = await axios.post('api/server/users');
      if(data.length > 0) {
        data.sort((firstObj: User, secondObj: User) => 
          firstObj.accumulateExperience > secondObj.accumulateExperience 
            ? 1 
            : -1
        );

        setUsers(data.reverse());

      };
    };
    getUsers();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Ranking | Take Care</title>
      </Head>
      <GlobalStyles />
      <SideBar toggleTheme={toggleTheme}/>

      <div className={styles.container}>
        <h1>Ranking</h1>
        <div className={styles.titles}>
          <p>Posição</p>
          <div>
            <p>Usuário</p>
            <div>
              <p>Desafios</p>
              <p>Experiência</p>
            </div>
          </div>
        </div>

        {users && users.map((user, index) =>(
          <RankingProfile key={user.userId} user={user} rankPosition={index + 1}/>
        ))}
        
      </div>
    </ThemeProvider>
  )
}
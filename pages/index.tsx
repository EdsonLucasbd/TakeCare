import Head from 'next/head';
import { CompletedChallenges } from '../src/components/CompletedChallenges';
import { CountDown } from '../src/components/CountDown';
import { ExperienceBar } from '../src/components/ExperienceBar';
import { Profile } from '../src/components/Profile';
import { ChallengeBox } from '../src/components/ChallengeBox';
import { CountDownProvider } from '../src/contexts/CountDownContext';


import styles from '../src/styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Take Care</title>
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
  )
}

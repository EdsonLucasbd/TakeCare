import Head from 'next/head';
import { CompletedChallenges } from '../src/components/CompletedChallenges';
import { CountDown } from '../src/components/CountDown';
import { ExperienceBar } from '../src/components/ExperienceBar';
import { Profile } from '../src/components/Profile';
import { ChallengeBox } from '../src/components/ChallengeBox';


import styles from '../src/styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Take Care</title>
      </Head>

      <ExperienceBar />

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
    </div>
  )
}

import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CompletedChallenges } from '../src/components/CompletedChallenges';
import { CountDown } from '../src/components/CountDown';
import { ExperienceBar } from '../src/components/ExperienceBar';
import { Profile } from '../src/components/Profile';
import { ChallengeBox } from '../src/components/ChallengeBox';
import { CountDownProvider } from '../src/contexts/CountDownContext';
import { ChallengesProvider } from '../src/contexts/ChallengesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

import styles from '../src/styles/pages/Home.module.css';

export default function Home(props) {
  
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
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
    </ChallengesProvider>
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
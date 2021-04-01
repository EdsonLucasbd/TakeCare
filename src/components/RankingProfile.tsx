import React from 'react'

import styles from '../styles/components/RankingProfile.module.css';

export interface User {
  userId: string;
  name: string;
  image: string;
  challengesCompleted: number;
  level: number;
  currentExperience: number;
  accumulateExperience: number;
}

interface RankingProfileProps {
  user: User;
  rankPosition: number;
}

export function RankingProfile({ user, rankPosition }: RankingProfileProps) {
  return (
    <div className={styles.container}>
      <div className={styles.rank}>{rankPosition}</div>
      <div className={styles.userInfos}>
        <div className={styles.profile}>
          <img src={user.image} alt="user avatar"/>
          <div>
            <strong>{user.name}</strong>
            <p>
              <img src="icons/level.svg" alt="Level"/>
              Level {user.level}
            </p>
          </div>
        </div>

        <div className={styles.userData}>
          <p>
            <span>{user.challengesCompleted}</span> completos
          </p>

          <p>
            <span>{user.accumulateExperience}</span> xp
          </p>
        </div>
      </div>
    </div>
  )
}

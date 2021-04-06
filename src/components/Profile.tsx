import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { name, level, profilePicture } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src={profilePicture} alt={`${name} avatar`}/>
      <div>
        <strong>{name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level icon"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}

import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  return (
    <div className={styles.challengeBoxContainer}>
      <div className={styles.challengeNotActive}>
        <strong>Finalize um ciclo para receber um desafio</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level Up" />
          Suba de nível completando desafios.
        </p>
      </div>
    </div>
  )
}

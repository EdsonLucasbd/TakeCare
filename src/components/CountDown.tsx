import { useContext } from 'react';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/CountDown.module.css';

export function CountDown() {
  const { 
    hasFinished, 
    minutes, 
    seconds, 
    isActive, 
    resetCountDown, 
    startCountDown 
  } = useContext(CountDownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

        {hasFinished ? (
          <button 
          disabled
          className={styles.countDownButton}
          >
          Ciclo encerrado
          <img className={styles.buttonIcons} src="/icons/check.svg" alt="check icon"/>
        </button>
        ) : (
          <>
            {isActive ? (
              <button 
                type="button" 
                className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                onClick={resetCountDown}
                >
                Abandonar ciclo
                <p className={styles.buttonIcons}>X</p>
              </button>
            ) : (
                <button 
                type="button" 
                className={styles.countDownButton}
                onClick={startCountDown}
                >
                Iniciar um ciclo 
                <img 
                  className={styles.buttonIcons} 
                  src="/icons/play_arrow.svg" 
                  alt="play icon"
                  />
                </button>
              )
            }
          </>
        )}
    </div>
  )
}

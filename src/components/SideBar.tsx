import styles from '../styles/components/SideBar.module.css';
import { ThemeSwitcher } from './ThemeSwitcher';

import EmojiEvents from '@material-ui/icons/EmojiEventsOutlined';
import Home from '@material-ui/icons/HomeOutlined';
import Redirect from './Redirect';

interface Props {
  toggleTheme: () => void;
}

export function SideBar({ toggleTheme }: Props) {

  function handleClick(iconName) {
    if (iconName.value === 'ranking') {
      return <Redirect to='/leaderboard' />
    } else if (iconName.value === 'home') {
      return <Redirect to='/index' />
    }
  }

  return (
    <div className={styles.container}>
      <img src="/sidebarLogo.png" alt="sideBar logo"/>

    <div className={styles.iconsContainer}>
      <button className="material-icons" onClick={() => handleClick('home')}>
        <Home fontSize="large" className={styles.home}/>
      </button>

      <button className="material-icons" onClick={() => handleClick('ranking')}>
        <EmojiEvents fontSize="large" className={styles.ranking}/>
      </button>
    </div>

      <div className={styles.switcher}>
        <ThemeSwitcher handleToggleTheme={toggleTheme}/>
      </div>
    </div>
  )
}

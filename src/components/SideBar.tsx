import styles from '../styles/components/SideBar.module.css';
import { ThemeSwitcher } from './ThemeSwitcher';

import EmojiEvents from '@material-ui/icons/EmojiEventsOutlined';
import Home from '@material-ui/icons/HomeOutlined';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  toggleTheme: () => void;
}

export function SideBar({ toggleTheme }: Props) {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <img src="/sidebarLogo.png" alt="sideBar logo"/>

    <div className={styles.iconsContainer}>
      <div className={
            router.pathname === "/"
              ? styles.iconSelected
              : styles.iconNotSelected
          }
        >
        <Link href='/'>
          <a className="material-icons">
            <Home fontSize="large" className={styles.home}/>
          </a>
        </Link>
      </div>

      <div className={
            router.pathname === "/leaderboard"
              ? styles.iconSelected
              : styles.iconNotSelected
          }
        >
        <Link href='/leaderboard'>
          <a className="material-icons">
            <EmojiEvents fontSize="large" className={styles.ranking}/>
          </a>
        </Link>
      </div>
    </div>

      <div className={styles.switcher}>
        <ThemeSwitcher handleToggleTheme={toggleTheme}/>
      </div>
    </div>
  )
}

import styles from '../styles/components/SideBar.module.css';
import { ThemeSwitcher } from './ThemeSwitcher';
import { signOut } from "next-auth/client";

import EmojiEvents from '@material-ui/icons/EmojiEventsRounded';
import Home from '@material-ui/icons/HomeRounded';
import Logout from '@material-ui/icons/ExitToAppRounded';
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
              <Home fontSize="large"/>
            </a>
          </Link>
        </div>

        <div className={
              router.pathname === "/leaderboard"
                ? styles.iconSelected
                : styles.iconNotSelected
            }>
          <Link href='/leaderboard'>
            <a className="material-icons">
              <EmojiEvents fontSize="large"/>
            </a>
          </Link>
        </div>

        <div onClick={() => signOut()} className={styles.iconNotSelected}>
          <a className="material-icons">
            <Logout fontSize="large"/>
          </a>
        </div>
      </div>

      <div className={styles.switcher}>
        <ThemeSwitcher handleToggleTheme={toggleTheme}/>
      </div>
    </div>
  )
}

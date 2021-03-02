import styles from '../styles/components/SideBar.module.css';
import { ThemeSwitcher } from './ThemeSwitcher';

export function SideBar() {
  return (
    <div className={styles.container}>
      <img src="/sidebarLogo.svg" alt="sideBar logo"/>

      <div className={styles.switcher}>
        <ThemeSwitcher />
      </div>
    </div>
  )
}

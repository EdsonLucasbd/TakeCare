import styles from '../styles/components/SideBar.module.css';
import { ThemeSwitcher } from './ThemeSwitcher';

interface Props {
  toggleTheme: () => void;
}

export function SideBar({ toggleTheme }: Props) {
  return (
    <div className={styles.container}>
      <img src="/sidebarLogo.png" alt="sideBar logo"/>

      <div className={styles.switcher}>
        <ThemeSwitcher handleToggleTheme={toggleTheme}/>
      </div>
    </div>
  )
}

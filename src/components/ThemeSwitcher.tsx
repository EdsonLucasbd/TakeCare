import React, {useState} from "react";
import Switch from "react-switch";

import styles from '../styles/components/SideBar.module.css';

export function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleChangeTheme = (checked)  => {
    setIsDarkMode(checked);
  }

  return (
    <div>
      <Switch
        className={styles.reactSwitch}
        onChange={handleChangeTheme}
        checked={isDarkMode}
        height={28}
        onColor="#1b1b1b"
        offColor="#888"
        uncheckedIcon={
          <>
            <img src="/icons/cloudAndSun.png" alt=""/>
          </>
        }
        checkedIcon={
          <>
            <img src="/icons/star.png" alt=""/>
          </>
        }
        uncheckedHandleIcon={
          <svg viewBox="0 0 10 10" height="100%" width="100%" fill="yellow">
            <circle r={5} cx={5} cy={5} />
          </svg>
        }
        checkedHandleIcon={
          <svg viewBox="0 0 10 10" height="100%" width="100%" fill="black">
            <circle r={5} cx={5} cy={5} />
          </svg>
        }
      />
    </div>
  );
};


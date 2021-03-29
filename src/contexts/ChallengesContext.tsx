import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from 'js-cookie';
import challenges from '../../challenges.json';
import { LevelUpMotal } from "../components/LevelUpModal";
import { useSession } from "next-auth/client";
import axios from "axios";

interface Challenge {
  type: 'body'| 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  name: string;
  profilePicture: string;
  level: number;
  currentExperience: number; 
  challengesCompleted: number;
  experienceToNextLevel: number;
  activeChallenge: Challenge;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
}

interface challengesProviderProps {
  children: ReactNode;
  // level: number;
  // currentExperience: number;
  // challengesCompleted: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: challengesProviderProps) {
  
  const [level, setLevel] = useState(/*rest.level ??*/ 1);
  const [currentExperience, setCurrentExperience] = useState(/*rest.currentExperience ??*/ 0);
  const [challengesCompleted, setChallengesCompleted] = useState(/*rest.challengesCompleted ??*/ 0);
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [accumulateExperience, setAccumulateExperience] = useState(0);
  const [profilePicture, setProfilePicture] = useState("");

  const [session]: any = useSession();

  const experienceToNextLevel = Math.pow((level + 1 )* 4, 2)

  useEffect(() => {
    async function getUser() {
      if (session) {
        const { data } = await axios.post('api/server/user', {
          userId: session.userId,
        });
        console.log(data);
        setName(data.name);
        setLevel(data.level);
        setProfilePicture(data.image);
        setCurrentExperience(data.currentExperience);
        setAccumulateExperience(data.totalExperience);
        setChallengesCompleted(data.challengesCompleted);
      }
    }
    getUser();
  }, []);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  // useEffect(() => {
  //   Cookies.set('level', String(level));
  //   Cookies.set('currentExperience', String(currentExperience));
  //   Cookies.set('challengesCompleted', String(challengesCompleted));
  // }, [level, currentExperience, challengesCompleted])

  function levelUp() {
    setLevel(level+1);
    setIsLevelUpModalOpen(true);
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio! 🎉', {
        body: `Valendo ${challenge.amount}xp!`,
        icon: "favicon.png"
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;
    let newLevel = level;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
      newLevel += 1;
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
    setAccumulateExperience(accumulateExperience + amount);
    updateUser(
      newLevel,
      finalExperience,
      accumulateExperience,
      challengesCompleted
    );
  }

  async function updateUser(
    level: number,
    currentExperience: number,
    accumulateExperience: number,
    challengesCompleted: number,
  ) {
      await axios.put('api/server/updateUser', {
        userId: session.userId,
        level,
        currentExperience,
        accumulateExperience,
        challengesCompleted
      });
    }

  return (
    <ChallengesContext.Provider 
      value={{
        name,
        profilePicture,
        level, 
        levelUp, 
        currentExperience, 
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge,
        closeLevelUpModal,
        }}
      >
      {children}

      { isLevelUpModalOpen && <LevelUpMotal/> }
    </ChallengesContext.Provider>
  );
}
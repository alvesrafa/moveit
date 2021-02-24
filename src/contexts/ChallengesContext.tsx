import { createContext, ReactNode, useContext, useState } from 'react';
import challenges from '../assets/challenges.json';
interface ChallengesProviderProps {
  children: ReactNode;
}
interface ChallengesContextProps {
  level: number;
  currentExp: number;
  challengesCompleted: number;
  expToNextLevel: number;
  activeChallenge: {
    type: 'body' | 'eye';
    description: string;
    amount: number;
  };

  resetChallenge: () => void;
  levelUp: () => void;
  startNewChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextProps);

export const useChallenges = () => useContext(ChallengesContext);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExp, setCurrentExp] = useState(0);
  const [challengesCompleted, setChallengesCompleteds] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const expToNextLevel = Math.pow((level + 1) * 4, 2);

  const levelUp = () => {
    setLevel(level + 1);
  };

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  };

  const resetChallenge = () => {
    setActiveChallenge(null);
  };

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExp,
        challengesCompleted,
        activeChallenge,
        expToNextLevel,

        resetChallenge,
        levelUp,
        startNewChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}

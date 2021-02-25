import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import challenges from '../assets/challenges.json';
import { useCountdown } from './CountdownContext';
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
  completeChallenge: () => void;
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
    toast('Incrível, você subiu de level 😍');
    setLevel(level + 1);
  };

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  };

  const completeChallenge = () => {
    if (!activeChallenge) return;

    toast.success('Mandou bem! 😎');

    const { amount } = activeChallenge;

    let finalExperience = currentExp + amount;

    if (finalExperience >= expToNextLevel) {
      finalExperience = finalExperience - expToNextLevel;

      levelUp();
    }

    setCurrentExp(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleteds(challengesCompleted + 1);
  };

  const resetChallenge = () => {
    toast('Poxa 😥 na próxima você consegue!');
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

        completeChallenge,
        resetChallenge,
        levelUp,
        startNewChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}

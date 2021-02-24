import { createContext, ReactNode, useContext, useState } from 'react';

interface ChallengesProviderProps {
  children: ReactNode;
}
interface ChallengesContextProps {
  level: number;
  currentExp: number;
  challengesCompleted: number;
  hasNewChallenge: boolean;

  levelUp: () => void;
  startNewChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextProps);

export const useChallenges = () => useContext(ChallengesContext);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExp, setCurrentExp] = useState(0);
  const [challengesCompleted, setChallengesCompleteds] = useState(0);
  const [hasNewChallenge, setHasNewChallenge] = useState(false);

  const levelUp = () => {
    setLevel(level + 1);
  };

  const startNewChallenge = () => {
    setHasNewChallenge(true);
  };

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExp,
        challengesCompleted,
        hasNewChallenge,

        levelUp,
        startNewChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}

import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react';
import { toast } from 'react-toastify';
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

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  const expToNextLevel = Math.pow((level + 1) * 4, 2);

  const levelUp = () => {
    setLevel(level + 1);
  };

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio! 🎉', {
        icon: '/favicon.png',
        body: `Valendo ${challenge.amount} XP`,
        vibrate: 2,
      });
    }
  };

  const completeChallenge = () => {
    if (!activeChallenge) return;

    const { amount } = activeChallenge;

    let finalExperience = currentExp + amount;

    if (finalExperience >= expToNextLevel) {
      finalExperience = finalExperience - expToNextLevel;
      toast.success('Incrível, você subiu de level 😍', {
        position: 'top-center',
      });
      levelUp();
    } else {
      toast.success('Mandou bem! 😎', {
        position: 'top-center',
      });
    }

    setCurrentExp(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleteds(challengesCompleted + 1);
  };

  const resetChallenge = () => {
    toast('Poxa 😥 na próxima você consegue!', {
      position: 'top-center',
    });
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

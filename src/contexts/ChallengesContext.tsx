import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

import challenges from '../utils/challenges.json';
import LevelUpModal from '../components/LevelUpModal';
interface ChallengesProviderProps {
  children: ReactNode;
  // level: number;
  // currentExp: number;
  // challengesCompleted: number;
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
  closeLevelUpModal: () => void;
  completeChallenge: () => void;
  resetChallenge: () => void;
  levelUp: () => void;
  startNewChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextProps);

export const useChallenges = () => useContext(ChallengesContext);

import axios from 'axios';
import { useAuth } from './AuthContext';

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const { userData } = useAuth();
  const [level, setLevel] = useState(1);
  const [currentExp, setCurrentExp] = useState(0);
  const [challengesCompleted, setChallengesCompleteds] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {}, []);

  useEffect(() => {
    if (loading) {
      axios
        .get(`/api/user/${userData?.email}`)
        .then((response) => {
          setChallengesCompleteds(response.data.user.challengesCompleted);
          setCurrentExp(response.data.user.currentExp);
          setLevel(response.data.user.level);
        })
        .catch((e) => {
          console.log('Erro ao buscar dados do user', e);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      axios.post(`/api/user`, {
        level: level,
        currentExp,
        email: userData?.email,
        challengesCompleted,
      });
    }
  }, [level, currentExp, challengesCompleted]);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  const expToNextLevel = Math.pow((level + 1) * 4, 2);

  const levelUp = () => {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  };
  const closeLevelUpModal = () => {
    setIsLevelUpModalOpen(false);
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
        closeLevelUpModal,
        completeChallenge,
        resetChallenge,
        levelUp,
        startNewChallenge,
      }}
    >
      {!loading && children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
}

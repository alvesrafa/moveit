import { useChallenges } from '../../contexts/ChallengesContext';
import { useCountdown } from '../../contexts/CountdownContext';
import { Container } from './styles';

const ChallengeBox = () => {
  const {
    activeChallenge,
    resetChallenge,
    completeChallenge,
  } = useChallenges();
  const { resetCountdown } = useCountdown();
  const handleChallengeSucceeded = () => {
    completeChallenge();
    resetCountdown();
  };
  const handleChallengeFailed = () => {
    resetChallenge();
    resetCountdown();
  };

  return (
    <Container>
      {activeChallenge ? (
        <div className="unlocked">
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge?.description}</p>
          </main>
          <footer>
            <button
              type="button"
              onClick={handleChallengeFailed}
              className="challenge-failed"
            >
              Falhei
            </button>
            <button
              type="button"
              onClick={handleChallengeSucceeded}
              className="challenge-succeeded"
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className="blocked">
          <strong>Finalize para receber um desafio.</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Realizando os desafios você ganha mais EXP e se mantém saudável. 😉
          </p>
        </div>
      )}
    </Container>
  );
};

export default ChallengeBox;

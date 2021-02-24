import { useChallenges } from '../../contexts';
import { Container } from './styles';

const ChallengeBox = () => {
  const { hasNewChallenge } = useChallenges();

  return (
    <Container>
      {hasNewChallenge ? (
        <div className="unlocked">
          <header>Ganhe 400 xp</header>
          <main>
            <img src="icons/body.svg" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos</p>
          </main>
          <footer>
            <button type="button" className="challenge-failed">
              Falhei
            </button>
            <button type="button" className="challenge-succeeded">
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className="blocked">
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </Container>
  );
};

export default ChallengeBox;

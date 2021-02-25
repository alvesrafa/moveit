import { useChallenges } from '../../contexts/ChallengesContext';
import { Container } from './styles';

const CompletedChallenges = () => {
  const { challengesCompleted } = useChallenges();

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  );
};

export default CompletedChallenges;

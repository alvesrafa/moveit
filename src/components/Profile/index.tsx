import { useChallenges } from '../../contexts';
import { Container } from './styles';

const Profile = () => {
  const { level } = useChallenges();

  return (
    <Container>
      <img src="https://github.com/alvesrafa.png" alt="Rafael Alves" />
      <div>
        <strong>Rafael Alves</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </Container>
  );
};

export default Profile;

import { useTheme } from '../../contexts/ThemeContext';
import { useChallenges } from '../../contexts/ChallengesContext';
import { Container } from './styles';
import ToogleTheme from '../ToogleTheme';

const Profile = () => {
  const { level } = useChallenges();

  const { toogleTheme, theme } = useTheme();

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
      <ToogleTheme onChange={toogleTheme} theme={theme} />
    </Container>
  );
};

export default Profile;

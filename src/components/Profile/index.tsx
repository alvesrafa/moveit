import { useTheme } from '../../contexts/ThemeContext';
import { useChallenges } from '../../contexts/ChallengesContext';
import { Container } from './styles';
import ToogleTheme from '../ToogleTheme';
import { useAuth } from '../../contexts/AuthContext';

const Profile = () => {
  const { level } = useChallenges();
  const { userData } = useAuth();
  const { toogleTheme, theme } = useTheme();

  return (
    <Container>
      <img src={userData?.photo} alt="Rafael Alves" />
      <div>
        <strong>{userData?.name}</strong>
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

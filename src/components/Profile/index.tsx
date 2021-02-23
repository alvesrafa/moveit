import { Container } from './styles';

const Profile = () => {
  return (
    <Container>
      <img src="https://github.com/alvesrafa.png" alt="Rafael Alves" />
      <div>
        <strong>Rafael Alves</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </Container>
  );
};

export default Profile;

import { useEffect } from 'react';
import { Container } from './styles';
import axios from 'axios';

interface UserGithubProps {
  user: UserProps;
  position: number;
}

interface UserProps {
  _id: string;
  email: string;
  level: number;
  currentExp: number;
  challengesCompleted: number;
  photo: string;
}

const UserGithub = ({ user, position }: UserGithubProps) => {
  useEffect(() => {}, []);

  return (
    <Container>
      <div className="position">
        <h1>{position + 1}</h1>
      </div>
      <div className="info">
        <div>
          <img src={user.photo} />
          <div className="profile">
            <strong>{user.email}</strong>
            <p>
              <img src="/icons/level.svg" />
              {user.level || 1} level
            </p>
          </div>
        </div>

        <p>
          <strong>{user.challengesCompleted || 1}</strong> completados
        </p>
      </div>
    </Container>
  );
};

export default UserGithub;

import { GetServerSideProps } from 'next';

import Main from './main';
import Login from './login';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

interface HomeProps {
  level: number;
  currentExp: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  const { isLogged } = useAuth();

  return <>{isLogged ? <Main {...props} /> : <Login />}</>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // CTX é o contexto da minha apluicação

  return {
    props: {
      // level: Number(level),
      // currentExp: Number(currentExp),
      // challengesCompleted: Number(challengesCompleted),
    },
  };
};

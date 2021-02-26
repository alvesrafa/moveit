import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Main from './main';
import Login from './login';
import { AuthProvider, useAuth } from '../contexts/AuthContext';

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

  const { level, currentExp, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExp: Number(currentExp),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};

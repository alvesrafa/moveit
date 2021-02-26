import { GetServerSideProps } from 'next';
import Head from 'next/head';
import ChallengeBox from '../components/ChallengeBox';

import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

import { Container } from './styles';

interface HomeProps {
  level: number;
  currentExp: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  const { level, currentExp, challengesCompleted } = props;
  return (
    <ChallengesProvider
      level={level}
      currentExp={currentExp}
      challengesCompleted={challengesCompleted}
    >
      <Container>
        <Head>
          <title>Início | move.it</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </Container>
    </ChallengesProvider>
  );
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

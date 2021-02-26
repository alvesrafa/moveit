import Head from 'next/head';
import ChallengeBox from '../../components/ChallengeBox';

import CompletedChallenges from '../../components/CompletedChallenges';
import Countdown from '../../components/Countdown';
import ExperienceBar from '../../components/ExperienceBar';
import Profile from '../../components/Profile';
import { CountdownProvider } from '../../contexts/CountdownContext';
import { ChallengesProvider } from '../../contexts/ChallengesContext';
import { Content, Container } from './styles';
import SideMenu from '../../components/SideMenu';

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
      <Head>
        <title>Início | move.it</title>
      </Head>
      <Container>
        <SideMenu />
        <Content>
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
        </Content>
      </Container>
    </ChallengesProvider>
  );
}

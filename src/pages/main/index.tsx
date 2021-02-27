import Head from 'next/head';
import ChallengeBox from '../../components/ChallengeBox';

import CompletedChallenges from '../../components/CompletedChallenges';
import Countdown from '../../components/Countdown';
import ExperienceBar from '../../components/ExperienceBar';
import Profile from '../../components/Profile';
import { CountdownProvider } from '../../contexts/CountdownContext';
import { ChallengesProvider } from '../../contexts/ChallengesContext';
import SideMenu from '../../components/SideMenu';

import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import { useEffect } from 'react';
import styled from 'styled-components';
interface HomeProps {
  level: number;
  currentExp: number;
  challengesCompleted: number;
}

const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: row;
  @media (max-width: 720px) {
    flex-direction: column;
  }
  transition: all 0.2s;
`;

const Content = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;

  > section {
    flex: 1;
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
  }
  @media (max-width: 720px) {
    > section {
      grid-template-columns: 1fr;
      padding: 3rem;
    }
  }
`;

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider>
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

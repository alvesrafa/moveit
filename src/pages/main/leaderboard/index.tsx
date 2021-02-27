import Head from 'next/head';
// import { useEffect } from 'react';
import SideMenu from '../../../components/SideMenu';
import styled from 'styled-components';

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
`;

const leaderboard = () => {
  return (
    <Container>
      <Head>
        <title>Ranking | move.it</title>
      </Head>
      <SideMenu />
      <Content>
        <h1>leaderboard</h1>
      </Content>
    </Container>
  );
};

export default leaderboard;

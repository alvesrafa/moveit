import Head from 'next/head';
// import { useEffect } from 'react';
import SideMenu from '../../../components/SideMenu';
import { Container, Content } from './styles';

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

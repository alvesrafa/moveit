import Head from 'next/head';
import { useAuth } from '../../contexts/AuthContext';
import { Container } from './styles';

import { AiFillGithub } from 'react-icons/ai';
const login = () => {
  const { loginWithGitHub } = useAuth();
  return (
    <Container>
      <Head>
        <title>Login | move.it</title>
      </Head>
      <section>
        <div>
          <img src="/icons/logo-home.svg" alt="Background move.it" />
        </div>
        <div>
          <img src="/icons/logomarca.svg" alt="move.it" />
          <h3>Bem-vindo</h3>

          <div className="login-wrapper">
            <div className="github-wrapper">
              <AiFillGithub color="#FFF" size={46} />
              <p>Faça login com seu GitHub para começar</p>
            </div>

            <button type="button" onClick={loginWithGitHub}>
              Entrar com Github <AiFillGithub color="#FFF" size={32} />
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default login;

import { useRouter } from 'next/router';
import { useAuth } from '../../contexts/AuthContext';
import { Container, LinkMenu } from './styles';
import { BiHomeAlt, BiAward } from 'react-icons/bi';
import Link from 'next/link';
const SideMenu = () => {
  const router = useRouter();
  const { logout } = useAuth();

  return (
    <Container>
      <Link href="/">
        <LinkMenu active={router.pathname === '/'}>
          <BiHomeAlt />
        </LinkMenu>
      </Link>
      <Link href="/main/leaderboard">
        <LinkMenu active={router.pathname === '/main/leaderboard'}>
          <BiAward />
        </LinkMenu>
      </Link>
      <Link href="/">
        <LinkMenu onClick={logout}>Sair</LinkMenu>
      </Link>
    </Container>
  );
};

export default SideMenu;

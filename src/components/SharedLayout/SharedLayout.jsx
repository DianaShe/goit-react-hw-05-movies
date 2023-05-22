import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayuot.styled';

function SharedLayout() {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
}

export default SharedLayout;

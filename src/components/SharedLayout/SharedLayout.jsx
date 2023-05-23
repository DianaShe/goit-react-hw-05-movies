import { Suspense } from 'react';
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
        <Suspense>
        <Outlet />
        </Suspense>
      </main>
    </Container>
  );
}

export default SharedLayout;

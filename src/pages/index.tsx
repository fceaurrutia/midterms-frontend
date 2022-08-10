import type { NextPage } from 'next';
import { useAuth } from '../contexts/useAuth';
import { PrivateLayout, PublicLayout } from '../layouts';
import Login from '../screens/login';

const Home: NextPage = () => {
  const data = useAuth();
  if (data?.isAuthenticated)
    return (
      <PrivateLayout>
        <div>asd</div>
      </PrivateLayout>
    );
  else
    return (
      <PublicLayout>
        <Login />
      </PublicLayout>
    );
};

export default Home;

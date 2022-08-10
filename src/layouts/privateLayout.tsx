import { Button } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import { useAuth } from '../contexts/useAuth';

interface LayoutProps {
  children: ReactNode;
}

const PrivateLayout: FC<LayoutProps> = ({ children }) => {
  const { logout } = useAuth();

  return (
    <div>
      PrivateLayout
      <Button variant="botonculiao" onClick={logout}>
        Logout
      </Button>
      {children}
    </div>
  );
};

export default PrivateLayout;

import { Box, Container, Text } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const PublicLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <Container bg={'pinkBG'} minH={'100vh'} minW={'100vw'} p={5}>
      <Text textAlign={'center'} fontSize={'2xl'}>
        Inicia tu sesión
      </Text>
      {children}
    </Container>
  );
};
export default PublicLayout;

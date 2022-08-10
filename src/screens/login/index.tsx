import { Button, Center, Input, Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/useAuth';
import { LoginInfo } from '../../services/graphql/user';
import { Login as LoginQuery } from '../../services/graphql/user';

const Login = () => {
  const auth = useAuth();

  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    email: '',
    password: '',
  });

  const { data, refetch } = LoginQuery(loginInfo);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  useEffect(() => {
    auth?.login(data || '');
  }, [data]);

  return (
    <Center>
      <Stack w={['100%', '70%', '30%', '25%']}>
        <Input
          variant={'filled'}
          name={'email'}
          value={loginInfo.email}
          onChange={handleChange}
        />
        <Input
          variant={'filled'}
          name={'password'}
          value={loginInfo.password}
          onChange={handleChange}
        />
        <Button variant="botonculiao" onClick={() => refetch()}>
          Iniciar Sesión
        </Button>
      </Stack>
    </Center>
  );
};

export default Login;

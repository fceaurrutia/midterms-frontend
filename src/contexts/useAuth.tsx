import {
  useState,
  createContext,
  useContext,
  FC,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';

export type AuthType = {
  isAuthenticated: boolean;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
  login: (data: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthType>({} as AuthType);

interface AuthProps {
  children: ReactNode;
}

const AuthProvider: FC<AuthProps> = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);

  const login = (data: string) => {
    if (data !== '') {
      localStorage.setItem('token', data);
      setAuthenticated(true);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuthenticated(false);
  };

  useEffect(() => {
    setAuthenticated(localStorage.getItem('token') !== null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider, AuthContext };

import { createContext, useContext, useState } from 'react';

interface AuthContext {
  isLoggedIn: boolean;
  toggle: () => void;
  logIn: () => void;
  logOut: () => void;
}

const AuthContext = createContext<AuthContext | null>(null);

export const useAuthContext = () => {
  //
  const context = useContext(AuthContext);
  if (context) {
    return context;
  }
  throw new Error('Oh no! Component should be placed inside AuthProvider');
};

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggle = () => setIsLoggedIn((value) => !value);
  const logIn = () => setIsLoggedIn(true);
  const logOut = () => setIsLoggedIn(false);

  return { isLoggedIn, toggle, logIn, logOut };
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn, toggle, logIn, logOut } = useAuth();
  return (
    <AuthContext.Provider value={{ isLoggedIn, toggle, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

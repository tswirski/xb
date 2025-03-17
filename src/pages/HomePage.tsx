import { useAuthContext } from '@components/Auth/AuthContext';
import { Button, Header, Text } from '@ui';

export const HomePage = () => {
  const context = useAuthContext();

  return (
    <div>
      <Header>Hello from home</Header>
      <Text>Is logged in: {context.isLoggedIn ? 'YES' : 'NO'}</Text>
      <Button onClick={() => context.toggle()}>Toggle</Button>
    </div>
  );
};

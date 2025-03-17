import { render } from '@testing-library/react';

import { AuthProvider } from '@components/Auth/AuthContext';
import { HomePage } from './HomePage';

describe('HomePage component', () => {
  it('should display HomePage component ;)', () => {
    const { debug } = render(
      <AuthProvider>
        <HomePage />
      </AuthProvider>,
    );
    debug();
  });
});

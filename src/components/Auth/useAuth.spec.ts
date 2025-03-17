import { act, renderHook } from '@testing-library/react';
import { useAuth } from './AuthContext';

describe('AuthContext, useAuth hook', () => {
  it('should change values', () => {
    const { result } = renderHook(() => useAuth());

    expect(result.current.isLoggedIn).toBe(false);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.isLoggedIn).toBe(true);

    act(() => {
      result.current.logOut();
    });

    expect(result.current.isLoggedIn).toBe(false);
  });
});

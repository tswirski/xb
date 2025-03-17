import { render, screen } from '@testing-library/react';
import { Input } from './Input';
import { axe } from 'jest-axe';

describe('Input component', () => {
  it('should not have violations', async () => {
    const { debug, container } = render(<Input label="E-mail" />);
    // console.log({ container });
    // debug();
    const result = await axe(container);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(result).toHaveNoViolations();
  });
});

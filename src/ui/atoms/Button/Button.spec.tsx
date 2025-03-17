import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { axe } from 'jest-axe';

// vitest + react testing library

describe('Button component', () => {
  it('should render correctly', () => {
    render(<Button>Click me</Button>);
    // make an assertion
    // provide callback and check number of calls of this callback
  });

  it('should render correctly', () => {
    render(<Button>Click me</Button>);

    expect(screen.getByText('Click me')).toBeInTheDocument();

    // make an assertion
    // provide callback and check number of calls of this callback
  });

  it('it should not have violations', async () => {
    const { container, debug } = render(<Button>Click me</Button>);
    const result = await axe(container);
    // console.log(container);
    // debug();
    expect(result).toHaveNoViolations();
  });
});

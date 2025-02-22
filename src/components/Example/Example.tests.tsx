// src/components/Example/Example.test.tsx
import { render, screen } from '@testing-library/react';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import React from 'react';

describe('Example test', () => {
  it('should work', () => {
    expect(true).toBe(true);
  });

  it('should render', () => {
    render(<div>Test</div>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});

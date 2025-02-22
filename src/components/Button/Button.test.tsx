import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button Component', () => {
  // Rendering tests
  describe('Rendering', () => {
    it('renders without crashing', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders children correctly', () => {
      render(<Button>Test Button</Button>);
      expect(screen.getByText('Test Button')).toBeInTheDocument();
    });

    it('renders with default props', () => {
      render(<Button>Default Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('btn-primary'); // Assuming default variant is primary
      expect(button).not.toBeDisabled();
    });
  });

  // Props tests
  describe('Props', () => {
    it('applies correct classes for primary variant', () => {
      render(<Button variant="primary">Primary</Button>);
      expect(screen.getByRole('button')).toHaveClass('btn-primary');
    });

    it('applies correct classes for secondary variant', () => {
      render(<Button variant="secondary">Secondary</Button>);
      expect(screen.getByRole('button')).toHaveClass('btn-secondary');
    });

    it('applies disabled state correctly', () => {
      render(<Button disabled>Disabled Button</Button>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('applies additional className when provided', () => {
      render(<Button className="custom-class">Custom Class</Button>);
      expect(screen.getByRole('button')).toHaveClass('custom-class');
    });

    it('applies size classes correctly', () => {
      render(<Button size="small">Small Button</Button>);
      expect(screen.getByRole('button')).toHaveClass('btn-sm');
    });
  });

  // Event handling tests
  describe('Event Handling', () => {
    it('calls onClick handler when clicked', async () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Click Me</Button>);

      await userEvent.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', async () => {
      const handleClick = jest.fn();
      render(
        <Button onClick={handleClick} disabled>
          Click Me
        </Button>,
      );

      await userEvent.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('handles multiple clicks correctly', async () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Click Me</Button>);

      const button = screen.getByRole('button');
      await userEvent.click(button);
      await userEvent.click(button);
      await userEvent.click(button);

      expect(handleClick).toHaveBeenCalledTimes(3);
    });
  });

  // Loading state tests
  describe('Loading State', () => {
    it('shows loading indicator when isLoading is true', () => {
      render(<Button isLoading>Submit</Button>);
      expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    });

    it('disables button during loading state', () => {
      render(<Button isLoading>Submit</Button>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('hides original text during loading', () => {
      render(<Button isLoading>Submit</Button>);
      expect(screen.queryByText('Submit')).not.toBeVisible();
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('has the correct aria attributes', () => {
      render(<Button aria-label="Submit form">Submit</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Submit form');
    });

    it('maintains focus state correctly', async () => {
      render(<Button>Focus Test</Button>);
      const button = screen.getByRole('button');

      button.focus();
      expect(button).toHaveFocus();

      button.blur();
      expect(button).not.toHaveFocus();
    });
  });

  // Edge cases
  describe('Edge Cases', () => {
    it('handles empty children', () => {
      render(<Button></Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('handles undefined onClick handler', () => {
      render(<Button>No Handler</Button>);
      const button = screen.getByRole('button');
      expect(() => fireEvent.click(button)).not.toThrow();
    });
  });
});

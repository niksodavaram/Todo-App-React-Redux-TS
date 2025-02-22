// src/components/Button/Button.tsx

import React from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  'aria-label'?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  isLoading = false,
  className = '',
  onClick,
  'aria-label': ariaLabel,
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${className}`}
      disabled={disabled || isLoading}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {isLoading ? <span data-testid="loading-spinner">Loading...</span> : children}
    </button>
  );
};

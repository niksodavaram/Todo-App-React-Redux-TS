import React from 'react';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional className
   */
  className?: string;
  /**
   * Optional disabled state
   */
  disabled?: boolean;
}

export const Button = ({
  primary = false,
  label,
  onClick,
  className = '',
  disabled = false,
}: ButtonProps) => {
  const baseStyles = "px-4 py-2 rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2";
  const primaryStyles = primary
    ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
    : "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-500";
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";

  return (
    <button
      type="button"
      className={`${baseStyles} ${primaryStyles} ${disabledStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
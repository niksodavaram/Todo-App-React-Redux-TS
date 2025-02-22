import { render as rtlRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Add any wrapper components here (e.g., providers)
function render(ui: React.ReactElement, options = {}) {
  return {
    ...rtlRender(ui, { ...options }),
    user: userEvent.setup(),
  };
}

// Re-export everything
export * from '@testing-library/react';
export { render };

import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  withBorder?: boolean;
};

export const Button = ({ children, withBorder = false }: ButtonProps) => {
  const buttonStyles = withBorder ? { ...demoButton, ...demoButtonBorder } : demoButton;
  return <button style={buttonStyles}>{children}</button>;
};

const demoButton: React.CSSProperties = {
  border: '1px solid transparent',
  borderRadius: '4px',
  backgroundColor: 'palegoldenrod',
  padding: '4px 8px',
  fontSize: '0.875rem',
  fontWeight: '500',
};

const demoButtonBorder: React.CSSProperties = {
  border: '1px solid #333',
};

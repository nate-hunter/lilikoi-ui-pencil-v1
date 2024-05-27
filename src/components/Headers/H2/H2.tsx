import React from 'react';

type H2Props = {
  children: React.ReactNode;
};

export const H2 = ({ children }: H2Props) => {
  return <h2 style={demoH2}>{children}</h2>;
};

const demoH2: React.CSSProperties = {
  fontSize: '28px',
  letterSpacing: '7%',
  fontFamily: 'monospace',
};

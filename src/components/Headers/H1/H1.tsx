import React from 'react';

type H1Props = {
  children: React.ReactNode;
};

export const H1 = ({ children }: H1Props) => {
  return <h1 style={demoH1}>{children}</h1>;
};

const demoH1: React.CSSProperties = {
  fontSize: '32px',
  letterSpacing: '7%',
  fontFamily: 'monospace',
};

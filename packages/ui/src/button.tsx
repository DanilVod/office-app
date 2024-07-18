'use client';

import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={'bg-black w-10 h-10'}
      onClick={() => alert(`Hello from your ${appName} app!`)}>
      {children}
    </button>
  );
};

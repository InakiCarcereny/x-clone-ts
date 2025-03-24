'use client';

import { createContext, ReactNode, use, useState } from 'react';

interface VerifiedContextType {
  verified: boolean;
  setGetVerified: () => void;
}

export const VerifiedContext = createContext<VerifiedContextType | undefined>(
  undefined,
);

export function useVerified() {
  const context = use(VerifiedContext);

  if (context === undefined) {
    throw new Error('useVerified must be used within a VerifiedProvider');
  }

  return context;
}

export function VerifiedProvider({ children }: { children: ReactNode }) {
  const [verified, setVerified] = useState(false);

  const setGetVerified = () => {
    setVerified(true);
  };

  return (
    <VerifiedContext.Provider value={{ verified, setGetVerified }}>
      {children}
    </VerifiedContext.Provider>
  );
}

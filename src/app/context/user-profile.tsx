'use client';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { createContext, use, useEffect, useState } from 'react';

interface UserProfileContextType {
  userProfile: UserProfile | null;
  setData: (data: UserProfile) => void;
}

type UserProfile = {
  name: string;
  bio: string;
  location: string;
  website: string;
};

export const UserProfileContext = createContext<
  UserProfileContextType | undefined
>(undefined);

export function useUserProfile() {
  const context = use(UserProfileContext);

  if (context === undefined) {
    throw new Error('useUserProfile must be used within a UserProfileProvider');
  }

  return context;
}

export function UserProfileProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setValue, storedValue } = useLocalStorage('user-profile', {
    name: '',
    bio: '',
    location: '',
    website: '',
  });
  const [userProfile, setUserProfile] = useState<UserProfile>({
    ...storedValue,
  });
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
    if (storedValue) {
      setUserProfile(storedValue);
    }
  }, [storedValue]);

  const setData = (data: UserProfile) => {
    setUserProfile(data);
    setValue(data);
  };

  if (!client) {
    return null;
  }

  return (
    <UserProfileContext.Provider value={{ userProfile, setData }}>
      {children}
    </UserProfileContext.Provider>
  );
}

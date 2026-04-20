"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type RecruiterModeContextType = {
  isRecruiterMode: boolean;
  toggleRecruiterMode: () => void;
};

const RecruiterModeContext = createContext<RecruiterModeContextType>({
  isRecruiterMode: false,
  toggleRecruiterMode: () => {},
});

export function RecruiterModeProvider({ children }: { children: ReactNode }) {
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);

  const toggleRecruiterMode = () => {
    setIsRecruiterMode(prev => !prev);
  };

  return (
    <RecruiterModeContext.Provider value={{ isRecruiterMode, toggleRecruiterMode }}>
      {children}
    </RecruiterModeContext.Provider>
  );
}

export const useRecruiterMode = () => useContext(RecruiterModeContext);

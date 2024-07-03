"use client";

import {
  createContext,
  useState,
  ReactNode,
  useContext,
  SetStateAction,
  Dispatch,
} from "react";

interface globalContextType {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  isLoadingComplete: boolean;
  setLoadingComplete: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<globalContextType | undefined>(undefined);

interface GlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoadingComplete, setLoadingComplete] = useState<boolean>(false);

  const setOpen = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <GlobalContext.Provider
      value={{ isOpen, setOpen, isLoadingComplete, setLoadingComplete }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useMenuContext must be used within a MenuContextProvider");
  }
  return context;
};

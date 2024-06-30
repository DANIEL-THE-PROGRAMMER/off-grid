
"use client"

import { createContext, useState, ReactNode, useContext } from 'react';

interface MenuContextType {
    isOpen: boolean;
    setOpen: (open: boolean) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

interface MenuContextProviderProps {
    children: ReactNode;
}

export const MenuContextProvider = ({ children }: MenuContextProviderProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const setOpen = (open: boolean) => {
        setIsOpen(open);
    };

    return (
        <MenuContext.Provider value={{ isOpen, setOpen }}>
            {children}
        </MenuContext.Provider>
    );
};

export const useMenuContext = () => {
    const context = useContext(MenuContext);
    if (context === undefined) {
        throw new Error('useMenuContext must be used within a MenuContextProvider');
    }
    return context;
};

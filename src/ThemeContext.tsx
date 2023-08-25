import React, { createContext, useState, useContext, ReactNode } from "react";

type Theme = "grey-theme" | "dark-theme" | "blue-theme";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("grey-theme");

  const toggleTheme = (color: string) => {
    setTheme(color as Theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

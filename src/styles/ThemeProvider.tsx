import { createContext, PropsWithChildren, useRef, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { GlobalStyle } from './GlobalStyle';
import { localStorageHelper } from '../utils/localStorageHelper';
import { darkTheme, lightTheme } from './theme';

type ThemeType = 'light' | 'dark';

interface ThemeContextType {
  themeType: ThemeType;
  toggleTheme: () => void;
}

export const CustomThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

const THEME_STORAGE_KEY = 'theme';
const themeLocalStorage = localStorageHelper<ThemeType>(
  THEME_STORAGE_KEY,
  'light'
);

export const CustomThemeProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const isFirstTransition = useRef(false); // 첫 번째 테마 transition 전환 비활성화
  const [themeType, setTheme] = useState<ThemeType>(() =>
    themeLocalStorage.get()
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (isFirstTransition.current === false) {
        isFirstTransition.current = true;
      }

      return themeLocalStorage.set(prevTheme === 'light' ? 'dark' : 'light');
    });
  };

  return (
    <CustomThemeContext.Provider value={{ themeType, toggleTheme }}>
      <StyledThemeProvider
        theme={themeType === 'light' ? lightTheme : darkTheme}
      >
        <GlobalStyle isThemeChanging={isFirstTransition.current} />
        {children}
      </StyledThemeProvider>
    </CustomThemeContext.Provider>
  );
};

import { createContext } from "react";

interface IThemeProvider {
    light: boolean,
    changeTheme: () => void
}

export const themeContext = createContext({} as IThemeProvider)


import { createContext } from "react";

type TToggle = {
    show: Boolean
    toggleState: () => void
}

export const toggle = createContext({} as TToggle)

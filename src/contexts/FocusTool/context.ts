import { createContext, Dispatch, SetStateAction } from "react";
type TFocusTool = {
    focus: boolean
    setFocus: Dispatch<SetStateAction<boolean>>
}

export const focusTool = createContext({} as TFocusTool)

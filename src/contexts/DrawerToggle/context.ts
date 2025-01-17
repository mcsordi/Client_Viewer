import { createContext } from 'react';
import { TNavDrawer } from '../../shared/types/NavDrawer';


type TToggle = {
    show: Boolean
    toggleState: () => void
    drawerOptions: TNavDrawer[]
    handleDrawerOptions: (navDrawer: TNavDrawer[]) => void
}

export const toggle = createContext({} as TToggle)

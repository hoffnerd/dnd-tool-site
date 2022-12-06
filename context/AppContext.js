import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

const initialState = {
    navigation: [
        { 
            key: "worlds", 
            display: "Worlds",
            description: "Create your own worlds or view others!",
            path: "worlds",
            frontImage: "menu/menu_geralt.png",
            disabledReason: "future"
        },
        { 
            key: "campaigns", 
            display: "Campaigns",
            description: "Create your own campaigns or view others!",
            path: "campaigns",
            frontImage: "menu/menu_geralt.png",
            disabledReason: "future"
        },
        { 
            key: "characters", 
            display: "Characters",
            description: "Create your own characters or view others!",
            path: "characters",
            frontImage: "menu/menu_ciri.png",
        },
        { 
            key: "encounters", 
            display: "Encounters",
            description: "Create your own encounters or view others!",
            path: "encounters",
            frontImage: "menu/menu_triss.png",
            disabledReason: "coming"
        },
    ],
}

export const AppContextProvider = ({children}) => {
    const [navigation, setNavigation] = useState(initialState.navigation);
    const values = { 
        navigation, setNavigation
    };
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext)
    return context;
}
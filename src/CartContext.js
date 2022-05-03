import { createContext, useState } from "react";

const cartContext = createContext();

export function CartProvider({ children }) {

    const [darkMode, setDarkMode] = useState(true);

    const changeDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <cartContext.Provider value={{darkMode,changeDarkMode}}>
            {children}
        </cartContext.Provider>
    )
}

export default cartContext;
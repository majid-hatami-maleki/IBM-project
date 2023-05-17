import { createContext } from "react";

export const AllContext = createContext()

const AllContextsProvider = ({ children }) => {
    <AllContext.Provider value={1}>
        {children}
    </AllContext.Provider>
}
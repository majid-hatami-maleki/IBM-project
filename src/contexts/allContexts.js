import { createContext, useState } from "react";

export const AllContext = createContext()

const AllContextsProvider = ({ children }) => {
    const [openCurrMenu, setOpenCurrMenu] = useState(false)
    const [currencyUnite, setCurrencyUnite] = useState('dollar')
    function changeCurrencyValueHandler(e) {
        setCurrencyUnite(e.target.id)
    }
    return (
        <AllContext.Provider value={{
            openCurrMenu,
            setOpenCurrMenu,
            currencyUnite,
            changeCurrencyValueHandler,
            setCurrencyUnite,
        }}>
            {children}
        </AllContext.Provider>
    )
}

export default AllContextsProvider
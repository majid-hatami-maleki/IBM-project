import { createContext, useState } from "react";

export const AllContext = createContext()

const AllContextsProvider = ({ children }) => {
    const [openCurrMenu, setOpenCurrMenu] = useState(false)
    const [currencyUnite, setCurrencyUnite] = useState('Dollar')
    function changeCurrencyValueHandler(e) {
        setCurrencyUnite(e.target.id)
    }
    const [budgetInput, setBudgetInput] = useState(0)
    const [newAllocate, setNewAllocate] = useState({})

    const departmentList = ['marketing', 'finance', 'sales', 'human resource', 'IT']
    return (
        <AllContext.Provider value={{
            openCurrMenu,
            setOpenCurrMenu,
            currencyUnite,
            changeCurrencyValueHandler,
            setCurrencyUnite,
            departmentList,
            budgetInput,
            setBudgetInput,
            newAllocate,
            setNewAllocate
        }}>
            {children}
        </AllContext.Provider>
    )
}

export default AllContextsProvider
import React, { useContext } from 'react'
import { AllContext } from '../../contexts/allContexts'
import { BsCurrencyDollar, BsCurrencyEuro, BsCurrencyPound, BsCurrencyRupee } from 'react-icons/bs'
function CurrencySigns() {
    const fetchContexts = useContext(AllContext)
    console.log(fetchContexts.currencyUnite)
    return (
        <>
            {fetchContexts.currencyUnite === 'dollar' && (<BsCurrencyDollar />)}
            {fetchContexts.currencyUnite === 'euro' && (<BsCurrencyEuro />)}
            {fetchContexts.currencyUnite === 'pound' && (<BsCurrencyPound />)}
            {fetchContexts.currencyUnite === 'rupee' && (<BsCurrencyRupee />)}
        </>
    )
}

export default CurrencySigns
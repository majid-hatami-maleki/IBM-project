import React, { useContext } from 'react'
import './CurrencySigns.css'
import { AllContext } from '../../contexts/allContexts'
import { BsCurrencyDollar, BsCurrencyEuro, BsCurrencyPound, BsCurrencyRupee } from 'react-icons/bs'
function CurrencySigns() {
    const fetchContexts = useContext(AllContext)
    console.log(fetchContexts.currencyUnite)
    return (
        <div className='CurrencySigns-container'>
            {fetchContexts.currencyUnite === 'Dollar' && (<BsCurrencyDollar />)}
            {fetchContexts.currencyUnite === 'Euro' && (<BsCurrencyEuro />)}
            {fetchContexts.currencyUnite === 'Pound' && (<BsCurrencyPound />)}
            {fetchContexts.currencyUnite === 'Rupee' && (<BsCurrencyRupee />)}
        </div>
    )
}

export default CurrencySigns
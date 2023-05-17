import React, { useContext, useState } from 'react'
import './BudgOptionsPanel.css'
import CurrencySigns from '../currency-signs/CurrencySigns'
import { RiArrowDownSFill } from 'react-icons/ri'
import { AllContext } from '../../contexts/allContexts'
import { BsCurrencyDollar, BsCurrencyEuro, BsCurrencyPound, BsCurrencyRupee } from 'react-icons/bs'
function BudgOptionsPanel() {
    const fetchContexts = useContext(AllContext)
    return (
        <ul className='BudgOptionsPanel-container'>
            <li className='BudgOptionsPanel-items budgetBoxColors'>
                <p>budget : </p>
                <div>
                    <span><CurrencySigns /></span>
                    <input type="number"
                        onChange={(e) => {
                            if (e.target.value < 0) e.target.value = 0
                            if (e.target.value > 2000) e.target.value = 2000
                            fetchContexts.setBudgetInput(e.target.value)
                            console.log(fetchContexts.budgetInput)
                        }}
                        value={fetchContexts.budgetInput}
                    />
                </div>
            </li>
            <li className='BudgOptionsPanel-items remainingBoxBgColors'>
                <p>remaining : </p>
                <div>
                    <span><CurrencySigns /></span>
                    <span>1040</span>
                </div>
            </li>
            <li className='BudgOptionsPanel-items spentBoxBgColors'>
                <p>spent so far : </p>
                <div>
                    <span><CurrencySigns /></span>
                    <span>960</span>
                </div>
            </li>
            <li className='BudgOptionsPanel-items currencyMenuColors'>
                <ul className='currency-menu '>
                    <li className='currency-menu-keyItem'>
                        <p>currency <span>(<CurrencySigns /> {fetchContexts.currencyUnite})</span></p>
                        <button
                            className='open-currency-menu-btn'
                            onClick={() => {
                                fetchContexts.setOpenCurrMenu((prevState) => !prevState)
                            }}
                        >
                            <RiArrowDownSFill />
                        </button>
                        {fetchContexts.openCurrMenu && (
                            <ul className='currency-subMenu'>
                                <li
                                    onClick={fetchContexts.changeCurrencyValueHandler}
                                    id='Dollar'>
                                    <BsCurrencyDollar /> dollar
                                </li>
                                <li
                                    onClick={fetchContexts.changeCurrencyValueHandler}
                                    id='Euro'>
                                    <BsCurrencyEuro /> euro
                                </li>
                                <li
                                    onClick={fetchContexts.changeCurrencyValueHandler}
                                    id='Pound'>
                                    <BsCurrencyPound /> pound
                                </li>
                                <li
                                    onClick={fetchContexts.changeCurrencyValueHandler}
                                    id='Rupee'>
                                    <BsCurrencyRupee /> rupee
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default BudgOptionsPanel
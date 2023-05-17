import React, { useContext, useState } from 'react'
import './BudgOptionsPanel.css'
import CurrencySigns from '../currency-signs/CurrencySigns'
import { RiArrowDownSFill } from 'react-icons/ri'
import { AllContext } from '../../contexts/allContexts'
function BudgOptionsPanel() {
    const fetchContexts = useContext(AllContext)
    return (
        <ul className='BudgOptionsPanel-container'>
            <li className='BudgOptionsPanel-items budgetBoxColors'>
                <p>budget : </p>
                <div>
                    <span><CurrencySigns /></span>
                    <input type="number" />
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
                                    id='dollar'>
                                    $ dollar
                                </li>
                                <li
                                    onClick={fetchContexts.changeCurrencyValueHandler}
                                    id='euro'>
                                    $ euro
                                </li>
                                <li
                                    onClick={fetchContexts.changeCurrencyValueHandler}
                                    id='pound'>
                                    $ pound
                                </li>
                                <li
                                    onClick={fetchContexts.changeCurrencyValueHandler}
                                    id='rupee'>
                                    $ rupee
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
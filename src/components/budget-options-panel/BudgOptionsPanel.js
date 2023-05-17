import React from 'react'
import './BudgOptionsPanel.css'
import { RiArrowDownSFill } from 'react-icons/ri'
function BudgOptionsPanel() {
    return (
        <ul className='BudgOptionsPanel-container'>
            <li className='BudgOptionsPanel-items budgetBoxColors'>
                <p>budget : </p>
                <div>
                    <span>$</span>
                    <input type="number" />
                </div>
            </li>
            <li className='BudgOptionsPanel-items remainingBoxBgColors'>
                <p>remaining : </p>
                <div>
                    <span>$</span>
                    <span>1040</span>
                </div>
            </li>
            <li className='BudgOptionsPanel-items spentBoxBgColors'>
                <p>spent so far : </p>
                <div>
                    <span>$</span>
                    <span>960</span>
                </div>
            </li>
            <li className='BudgOptionsPanel-items currencyMenuColors'>
                <ul className='currency-menu '>
                    <li className='currency-menu-keyItem'>
                        <p>currency <span>($ dollar)</span></p>
                        <button className='open-currency-menu-btn'><RiArrowDownSFill /></button>
                        <ul className='currency-subMenu'>
                            <li>$ dollar</li>
                            <li>$ euro</li>
                            <li>$ pound</li>
                            <li>$ rupee</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default BudgOptionsPanel
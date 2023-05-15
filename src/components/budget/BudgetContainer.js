import React from 'react'
import './BudgetContainer.css'
import BudgetInfoBoxes from '../budgetBoxes/BudgetInfoBoxes'
function BudgetContainer() {
    return (
        <div className='BudgetContainer'>
            <BudgetInfoBoxes className={'budget-items budget-item1 budgetBgCol'}>
                <span className='budget-items-title'>budget : </span>
                <div className='budget-items-valuePart'>
                    <span className='budget-items-valuePart-currency-sign'>φ</span>
                    <input type="number" className='budget-items-inputs' />
                </div>
            </BudgetInfoBoxes>
            <BudgetInfoBoxes className={'budget-items budget-item2 remainingBgCol'}>
                <span className='budget-items-title'>remaining : </span>
                <div className='budget-items-valuePart'>
                    <span className='budget-items-valuePart-currency-sign'>φ</span>
                    <span className='budget-items-valuePart-value'>1040</span>
                </div>
            </BudgetInfoBoxes>
            <BudgetInfoBoxes className={'budget-items budget-item3 spentSoFarBgCol'}>
                <span className='budget-items-title'>spent so far : </span>
                <div className='budget-items-valuePart'>
                    <span className='budget-items-valuePart-currency-sign'>φ</span>
                    <span className='budget-items-valuePart-value'>960</span>
                </div>
            </BudgetInfoBoxes>
        </div>
    )
}

export default BudgetContainer
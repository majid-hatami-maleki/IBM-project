import React from 'react'
import './BudgetInfoBoxes.css'
function BudgetInfoBoxes({ className, children }) {
    return (
        <div className={`BudgetInfoBoxes ${className}`} >
            {children}
        </div >
    )
}

export default BudgetInfoBoxes
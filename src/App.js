import React from 'react'
import './app.css'
import BudgOptionsPanel from './components/budget-options-panel/BudgOptionsPanel'
import AllosTabel from './components/allocations-table/AllosTable'
import ChangeAlloPanel from './components/change-allocation-panel/ChangeAlloPanel'

function App() {
    return (
        <div className='app-container'>
            <h1 className='app-title'>company's budget allocation</h1>
            <BudgOptionsPanel />
            <AllosTabel />
            <h2>change allocation</h2>
            <ChangeAlloPanel />
        </div>
    )
}

export default App
import React from 'react'
import './app.css'
import BudgetContainer from './budget/BudgetContainer'
import AllocatedContainer from './allocate/AllocatedContainer'
import LogsContainer from './logs/LogsContainer'
import AddAllocation from './addAllocation/AddAllocation'
function App() {
    return (
        <div className='app-container'>
            <h1 className='app-title'>company's budget allocation</h1>
            <BudgetContainer />
            <AllocatedContainer />
            <AddAllocation />
            <LogsContainer />
        </div>
    )
}

export default App
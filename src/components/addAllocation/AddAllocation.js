import React from 'react'
import './AddAllocation.css'
import ManageAllocationsMenus from '../manageAllocations/ManageAllocationsMenus'
function AddAllocation() {
    return (
        <div className='AddAllocation-container'>
            <h2>add allocation</h2>
            <ManageAllocationsMenus />
        </div>
    )
}

export default AddAllocation
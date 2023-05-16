import React from 'react'
import './LabeledSelectMenu.css'
function LabeledSelectMenu() {
    return (
        <div className='LabeledSelectMenu-container'>
            <label htmlFor="">department</label>
            <select name="" id="">
                <option value="default" hidden>choose...</option>
            </select>
        </div>
    )
}

export default LabeledSelectMenu
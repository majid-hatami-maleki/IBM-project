import React from 'react'
import './ChangeAlloPanel.css'
import CurrencySigns from '../currency-signs/CurrencySigns'
function ChangeAlloPanel() {
    return (
        <div className='ChangeAlloPanel-container'>
            <section className='ChangeAlloPanel-parts ChangeAlloPanel-menus'>
                <span>department</span>
                <select name="department-menu" id="">
                    <option value="default" hidden>choose...</option>
                </select>
            </section>
            <section className='ChangeAlloPanel-parts ChangeAlloPanel-menus'>
                <span>allocation</span>
                <select name="department-menu" id="">
                    <option value="default" hidden>choose...</option>
                </select>
            </section>
            <section className='ChangeAlloPanel-parts ChangeAlloPanel-menus'>
                <span><CurrencySigns /></span>
                <input type="number" />
            </section>
            <button className='ChangeAlloPanel-save-btn'>save</button>
        </div>
    )
}

export default ChangeAlloPanel
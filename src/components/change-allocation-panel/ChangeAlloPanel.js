import React from 'react'
import './ChangeAlloPanel.css'
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
                <span>$</span>
                <input type="number" />
            </section>
            <button className='ChangeAlloPanel-save-btn'>save</button>
        </div>
    )
}

export default ChangeAlloPanel
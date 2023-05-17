import React, { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './ChangeAlloPanel.css'
import CurrencySigns from '../currency-signs/CurrencySigns'
import { AllContext } from '../../contexts/allContexts'
function ChangeAlloPanel() {
    const fetchContext = useContext(AllContext)
    const [departmentItems, setDepartmentItems] = useState(fetchContext.departmentList)
    return (
        <div className='ChangeAlloPanel-container'>
            <section className='ChangeAlloPanel-parts ChangeAlloPanel-menus'>
                <span>department</span>
                <select name="department-menu"
                    id=""

                >
                    <option value="default" hidden>choose...</option>
                    {departmentItems.map(dep => (
                        <option key={uuidv4()} value={dep}>{dep}</option>
                    ))}
                </select>
            </section>
            <section className='ChangeAlloPanel-parts ChangeAlloPanel-menus'>
                <span>allocation</span>
                <select name="department-menu" id="">
                    <option value="add">add</option>
                    <option value="change">change</option>
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
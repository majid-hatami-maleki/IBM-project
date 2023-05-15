import React from 'react'
import './CurrenciesMenu.css'
import CurrencyTypeMenu from '../currenciesMenu/CurrencyTypeMenu'
import { MdOutlineArrowDropDown } from 'react-icons/md'
function CurrenciesMenu() {
    return (
        <ul className='CurrenciesMenu'>
            <li className='CurrenciesMenu-title-li'>
                <h2 className='CurrenciesMenu-title-staticTitle'>
                    currency
                    <span className='CurrenciesMenu-title-dynamicTitle'>
                        ($ dollar)
                    </span>
                </h2>
                <button className='CurrenciesMenu-openMenu-btn'><MdOutlineArrowDropDown /></button>
                {/* <CurrencyTypeMenu /> */}
            </li>
        </ul>
    )
}

export default CurrenciesMenu
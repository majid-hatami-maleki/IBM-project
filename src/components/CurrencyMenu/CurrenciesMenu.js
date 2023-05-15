import React from 'react'
import './CurrenciesMenu.css'
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
                <ul className='CurrenciesMenu-submenu'>
                    <li className='CurrenciesMenu-submenu-items'>
                        <span className='CurrenciesMenu-submenu-currencySigns'>dollar sign</span>
                        <span className='CurrenciesMenu-submenu-currencyName'>dollar</span>
                    </li>
                    <li>
                        <span>pound sign</span>
                        <span>pound</span>
                    </li>
                    <li>
                        <span>euro sign</span>
                        <span>euro</span>
                    </li>
                    <li>
                        <span>rupee sign</span>
                        <span>rupee</span>
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default CurrenciesMenu
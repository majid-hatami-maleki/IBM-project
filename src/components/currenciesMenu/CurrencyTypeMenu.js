import React from 'react'

function CurrencyTypeMenu() {
    return (
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
    )
}

export default CurrencyTypeMenu
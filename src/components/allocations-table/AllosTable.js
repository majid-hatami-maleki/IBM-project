import React from 'react'
import './allocationTable.css'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { MdOutlineClose } from 'react-icons/md'
function AllosTable() {
    return (
        <div className='AllosTable-container'>
            <h2 className='AllosTable-title'>allocations</h2>
            <ul className='AllosTable-list-menu'>
                <li className='AllosTable-list-items'>
                    <section>
                        <h3>department</h3>
                    </section>
                    <section>
                        <h3>allocated budget</h3>
                    </section>
                    <section>
                        <h3>increase by 10</h3>
                    </section>
                    <section>
                        <h3>decrease by 10</h3>
                    </section>
                    <section>
                        <h3>remove</h3>
                    </section>
                </li>
                <li className='AllosTable-list-items'>
                    <section>
                        <span>marketing</span>
                    </section>
                    <section>
                        <span>$</span><span>50</span>
                    </section>
                    <section>
                        <button className='increase-alloBudg-btn'><AiOutlinePlus /></button>
                    </section>
                    <section>
                        <button className='decrease-alloBudg-btn'><AiOutlineMinus /></button>
                    </section>
                    <section>
                        <button className='remove-allBudg-item-btn'><MdOutlineClose /></button>
                    </section>
                </li>
            </ul>
        </div>
    )
}

export default AllosTable
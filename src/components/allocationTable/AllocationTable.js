import React from 'react'
import './AllocationTable.css'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai'
function AllocationTable() {
    return (
        <table className='AllocationTable-container'>
            <tr>
                <th>department</th>
                <th>allocated budget</th>
                <th>increase by 10</th>
                <th>decrease by 10</th>
                <th>remove</th>
            </tr>
            <tr>
                <td>marketing</td>
                <td>50$</td>
                <td><button className='AllocationTable-table-increaseAllocation-btn'><AiOutlinePlus /></button></td>
                <td><button className='AllocationTable-table-decreaseAllocation-btn'><AiOutlineMinus /></button></td>
                <td><button className='AllocationTable-table-removeAllocation-btn'><AiOutlineClose /></button></td>
            </tr>
        </table>
    )
}

export default AllocationTable
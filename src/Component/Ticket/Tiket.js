import React from 'react'

import { listOfNumbers } from '../../constants'

import './Tiket.css'

const TicketList = ({ click, ticketNumbers,controlLength }) => {

    const renderTicketNumbers = () => listOfNumbers.map((n) => {
        if (ticketNumbers.includes(n)) {

            return <div className={'grey'} key={n} onClick={click}>{n}</div>
        } else {

            return <div className={'ticket_number'} key={n} onClick={click}>{n}</div>
        }
    }

    )


    return (
        <div className='tiket'  >
            <div className='ticket_title'>
                <h3>Loto </h3>
            </div>

            <div className='numbers'>
                {renderTicketNumbers()}
            </div>
            <footer>
                <h4>Odaberi 5 brojeva</h4>
            </footer>

        </div>

    )
}
export default TicketList
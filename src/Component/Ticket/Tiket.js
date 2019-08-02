import React from 'react'
// import './Ticket.css'
import './Ticket.css'
import { listOfNumbers } from '../../constants'

const TicketList = ({ click, ticketNumbers }) => {

    const renderTicketNumbers = () => listOfNumbers.map((n) => {
        if (ticketNumbers.includes(n)) {
            return <div className={'gold'} key={n} onClick={click}>{n}</div>
        } else {
            return <div className={'ticket_number'} key={n} onClick={click}>{n}</div>
        }
    }
    );


    return (
        <div className='ticket'  >
            <div className='ticket_title'>
                <h3>Loto listić</h3>
            </div>
            <div className='numbers'>
                {renderTicketNumbers()}
            </div>
            <footer>
                <h4>Odaberi od 1 do 5 brojeva</h4>
                <span className='ticket_info'> Neophodno je 5 tiketa</span>
            </footer>
        </div>

    )
};

export default TicketList
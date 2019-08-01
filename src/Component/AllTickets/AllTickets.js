import React from 'react'
import SingleTicket from '../SingleTicket/SingleTicket'
const AllTickets = ({ ticketNumbers, lottoNumbers, isNumberGeneratingFinished }) => {
    return ( <div className = "all_tickets" >
       <div className='all_tickets_title_div'>
           <h3 className='all_tickets_title'>Tiketi</h3>
       </div>
         {
            ticketNumbers.map((element, i) => {
                return <SingleTicket key = { i }
                arrayOfLottoNumbers = { element }
                lottoNumbers = { lottoNumbers }
                isNumberGeneratingFinished = { isNumberGeneratingFinished }
                />
            })
        } </div>
    )
};

export default AllTickets
import React from 'react'

const AllTickets=(props)=>{
    return(
        <div className="all_tickets">
            {props.numbers.map((element)=>{
                return <div className='single_ticket'>{element.map((el)=>{
                   return <div className='single_ticket_numbers'>{el}</div>
                })}</div>

            })}
            

        </div>
    )
}

export default AllTickets


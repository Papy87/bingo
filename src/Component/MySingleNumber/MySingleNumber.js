import React from 'react'
import Button from '../Buttons/Button'

const MySingleNumber = ({ number, showButton,singleNumber,deleteNumber,buttonStatus }) => {
    return ( 
        <>
        <div className='my_ticket_numbers_list'>
        <div className="my_ticket_number" onClick={showButton}>{number}</div>
        </div>
        <div className="delete_my_number_div">
            <Button arrayNumber={number} singleNumber={singleNumber} deleteNumber={deleteNumber} buttonStatus={buttonStatus} showButton={showButton}/>
        </div>
</>        
       
    )
}

export default MySingleNumber
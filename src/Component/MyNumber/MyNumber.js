import React from 'react'
import MySingleNumber from '../MySingleNumber/MySingleNumber'

import './MyNumber.css'

const MyNumbers = ({ showButton, numbers, singleNumber, deleteNumber, buttonStatus }) => {

    return (
        <div className='my_number_list'>
            <h5>Odabrani Brojevi</h5>
            {numbers.map((element, i) => <MySingleNumber key={i} number={element} singleNumber={singleNumber} deleteNumber={deleteNumber} buttonStatus={buttonStatus} showButton={showButton} />)}
            <div className='message_div'>
                <span className='message'>Za brisanje pritisnuti broj</span>
            </div>
        </div>
    )
};

export default MyNumbers
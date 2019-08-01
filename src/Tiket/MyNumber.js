import React from 'react'
import './Tiket.css'
import MySingleNumber from './MySingleNumber'

const MyNumbers = ({ showButton, numbers, singleNumber, deleteNumber, buttonStatus }) => {

    return (
        <div className='my_number_list'>
            <h4>Odabrani Brojevi</h4>
            {numbers.map((element, i) => <MySingleNumber key={i} number={element} singleNumber={singleNumber} deleteNumber={deleteNumber} buttonStatus={buttonStatus} showButton={showButton} />)}
            <div className='message_div'>
                        <span className='message'>Ako zelite da obrisete broj kliknite na broj</span>
                    </div>
        </div>
    )
};

export default MyNumbers
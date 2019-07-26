import React from 'react'
import Tiket from './Tiket.css'

const MyNumbers=(props)=>{

    const style={
        display:'inline',
        cursor: 'pointer'
        
    };

    const styleTwo={
        display:'none'
    };
    

    return(
        
            
        
        <div className='my_number_list'>
            {
                
            }
            <h2>Moji brojevi</h2>

            {props.numbers.map((element)=>{

                return (
                    <>
                    <div className='my_ticket_numbers_list'>
                    <div value ={element}className="my_ticket_number" onClick={props.showButton}>{element}</div>
                    </div>
                    <div className="delete_my_number_div">
                        <button value={element} className='delete_my_number_button ' style={props.buttonStatus ? style:styleTwo } onClick={props.deleteNumber} >X</button>
                    </div>
</>                )

            })}
            
        </div>
    )
}

export default MyNumbers
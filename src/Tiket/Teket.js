import React from 'react'
import Tiket from './Tiket.css'

const Ticket = (props) => {

const nubmers=()=>{
    let listOfNumbers=[];

    for( let i=1; i<=30;i++){
        listOfNumbers.push(<div className='ticket_number' onClick={props.click}>{i}</div>) 
    }
    return listOfNumbers
}

    return (
        <div className='tiket'  >
            <div className='ticket_title'>
                <h1>Bingo listic</h1>
            </div>

            <div className='numbers'>
                {nubmers()}



            </div>
          <footer>
              <h4>Odaberi 5 bojeva</h4>
          </footer>

        </div>

    )
}
export default Ticket
import React, { Component } from 'react';
import TicketList from './Tiket/Teket'
import MyNumbers from './Tiket/MyNumber'
import AllTickets from './Tiket/AllTickets'
import SpinBallsButton from './Tiket/SpinBallsButton'
import './App.css';

class App extends Component {
  state = {
    ticketNumbers: [],
    ticketArray: [],
    lottoNumbers: [],
    numberIndex: null,
    switchBackgroundColor: true,
    showDeleteButton: false,
  };

  collectTicketNumbers = (event) => {
    const addingNumber = parseInt(event.target.textContent)
    let ticketNumbers = [...this.state.ticketNumbers]
    if (this.state.ticketNumbers.length < 5 && ticketNumbers.indexOf(addingNumber) === -1) {
      this.setState({
        ticketNumbers: [...ticketNumbers, addingNumber],
        switchBackgroundColor: !this.state.switchBackgroundColor,
      })
    }
  };

  showDeleteButton = () => {
    this.setState({
      showDeleteButton: !this.state.showDeleteButton,
    })
  };

  deleteNumber = (event) => {
    let ticketNumbers = [...this.state.ticketNumbers]
    let indexNumber = ticketNumbers.indexOf(parseFloat(event.target.value))
    ticketNumbers.map((element) => {
      if (element === parseFloat(event.target.value)) {
        ticketNumbers.splice(indexNumber, 1)
        this.setState({
          ticketNumbers: ticketNumbers
        })
      }
    }
    )
  };
  collectTicket = () => {
    let singleTicket = [...this.state.ticketNumbers]
    let ticketArray = [...this.state.ticketArray]
    this.setState({
      ticketArray: [...ticketArray, singleTicket],
      ticketNumbers: []
    })
  };

  lottoBallNumbers = () => {

    const spinBalls = () => {
      let randomNumber = Math.floor(Math.random() * 30) + 1;
      if (
        this.state.lottoNumbers.indexOf(randomNumber) === -1
      ) {
        this.setState({ lottoNumbers: [...this.state.lottoNumbers, randomNumber] })
      }
    };
    let startSpining=setInterval(spinBalls, 1000);
    let lotoNum = this.state.lottoNumbers.length;
    let stopSpinning = () => {
      clearInterval(startSpining)
    };
    if (lotoNum <= 12) {
      spinBalls()
    } else {
      stopSpinning()
    }
  };



  render() {
    console.log(this.state.lottoNumbers)
    console.log(this.state.lottoNumbers.length)
    // console.log(this.state.ticketNumbers)
    let myNumbers = null;
    let addTicketButton = null;
    let allTickets = null;
    let spinBallsButton = null;

    if (this.state.ticketNumbers.length > 0) {
      myNumbers = (<><MyNumbers showButton={this.showDeleteButton} numbers={this.state.ticketNumbers} buttonStatus={this.state.showDeleteButton} deleteNumber={this.deleteNumber} />
      </>)
    };

    if (this.state.ticketNumbers.length > 0) {
      addTicketButton = (<div className='ticket_button'>
        <button onClick={this.collectTicket}>Dodaj Tiket</button>
      </div>)
    };
    if (this.state.ticketArray.length > 0) {
      allTickets = (<AllTickets numbers={this.state.ticketArray} />)
    };

    if (this.state.ticketArray.length === 1) {
      spinBallsButton = (<SpinBallsButton spin={this.lottoBallNumbers} />

      )

    }


    return (
      <div className="App">
        <h1>Dobar dan okusajte vasu srecu
        </h1>
        <TicketList click={this.collectTicketNumbers} switchBackground={this.state.switchBackgroundColor} />
        {addTicketButton}
        {myNumbers}
        {allTickets}
        {spinBallsButton}
      </div>
    );
  }
}

export default App;

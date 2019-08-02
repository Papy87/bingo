import React, { Component } from "react";
import TicketList from "./Component/Ticket/Tiket";
import MyNumbers from "./Component/MyNumber/MyNumber";
import AllTickets from "./Component/AllTickets/AllTickets";
import SpinBallsButton from "./Component/Buttons/SpinBallsButton";
import AllLottoNumbers from "./Component/AllLotoNumbers/AllLotoNumbers";
import ResetButton from "./Component/Buttons/ResetButton";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      ticketNumbers: [],
      ticketArray: [],
      lottoNumbers: [],
      singleNumber: null,
      numberIndex: null,
      switchBackgroundColor: true,
      showDeleteButton: false,
      matchCounterStatus: false,
      isNumberGeneratingFinished: true,
      matchCounter: 0,
      intervalId: null
    };
  }

  collectTicketNumbers = event => {
    const addingNumber = parseInt(event.target.textContent);
    const ticketNumbers = [...this.state.ticketNumbers];
    if (this.state.ticketArray.length <= 4) {
      if (
        ticketNumbers.length <= 4 &&
        ticketNumbers.indexOf(addingNumber) === -1
      ) {
        this.setState({
          ticketNumbers: [...ticketNumbers, addingNumber],
          switchBackgroundColor: !this.state.switchBackgroundColor
        });
      }
    }
  };

  showDeleteButton = event => {
    this.setState({
      showDeleteButton: !this.state.showDeleteButton,
      singleNumber: parseInt(event.target.textContent)
    });
  };

  deleteNumber = event => {
    let ticketNumbers = [...this.state.ticketNumbers];
    let indexNumber = parseInt(event.target.value);
    const filteredTicketNumbers = ticketNumbers.filter(
      element => element !== indexNumber
    );
    this.setState({
      ticketNumbers: filteredTicketNumbers,
      showDeleteButton: !this.state.showDeleteButton
    });
  };

  collectTicket = () => {
    let singleTicket = [...this.state.ticketNumbers];
    let ticketArray = [...this.state.ticketArray];
    this.setState({
      ticketArray: [...ticketArray, singleTicket],
      ticketNumbers: []
    });
  };

  randomLottoNumbers = () => {
    const lottoNumbers = [...this.state.lottoNumbers];

    const generateNumber = () => {
      const newNumber = Math.floor(Math.random() * 30) + 1;
      if (!lottoNumbers.includes(newNumber)) {
        lottoNumbers.push(newNumber);
      }
      return lottoNumbers;
    };

    const intervalId = setInterval(
      () =>
        this.setState(() => {
          return { lottoNumbers: generateNumber() };
        }),
      2000
    );
    return intervalId;
  };

  startLotto = () => {
    if (this.state.lottoNumbers.length === 0) {
      const intervalId = this.randomLottoNumbers();
      this.setState({
        intervalId,
        isNumberGeneratingFinished: false
      });
    }
  };

  resetGame = () => {
    this.setState({
      ticketNumbers: [],
      ticketArray: [],
      lottoNumbers: [],
      singleNumber: 0,
      numberIndex: null,
      switchBackgroundColor: true,
      showDeleteButton: false,
      matchCounterStatus: false,
      isNumberGeneratingFinished: true,
      matchCounter: 0,
      intervalId: null
    });
  };

  componentDidUpdate(prevProps, prevState) {

    if (this.state.lottoNumbers.length === 12) {
      clearInterval(this.state.intervalId);
    }
    if (
      prevState.isNumberGeneratingFinished !==
      this.state.isNumberGeneratingFinished
    ) {
      this.setState({ isNumberGeneratingFinished: true });
    }
  }

  render() {

    const {
      ticketNumbers,
      showDeleteButton,
      singleNumber,
      ticketArray,
      lottoNumbers,
      isNumberGeneratingFinished
    } = this.state;

    return (
      <>
        <h3 className="title"> Dobar dan okušajte vašu sreću </h3>
        <div className="App" key={Math.random()}>
          <div className="section_five">
            <TicketList
              ticketNumbers={ticketNumbers}
              click={this.collectTicketNumbers}
              switchBackground={singleNumber}
              controlLength={ticketArray}
            />{" "}
          </div>



          <div className="section_three">
            {" "}
            {ticketNumbers.length && ticketNumbers.length <= 5 ? (
              <MyNumbers
                showButton={this.showDeleteButton}
                numbers={ticketNumbers}
                singleNumber={singleNumber}
                deleteNumber={this.deleteNumber}
                buttonStatus={showDeleteButton}
              />
            ) : null}{" "}
          </div>

          <div className="section_four">
            {" "}
            {ticketNumbers.length && ticketNumbers.length <= 5 ? (
              <div className="ticket_button">
                {" "}
                <button
                  className="add_ticket_button"
                  onClick={this.collectTicket}
                >
                  {" "}
                  Dodaj Tiket{" "}
                </button>{" "}
              </div>
            ) : null}
            {ticketArray.length &&
              ticketArray.length === 5 &&
              lottoNumbers.length < 12 ? (
                <SpinBallsButton spin={this.startLotto} />
              ) : null}
            {lottoNumbers.length === 12 ? (
              <ResetButton reset={this.resetGame} />
            ) : null}
          </div>



          <div className="section_six">
            {" "}
            {ticketArray.length ? (
              <AllTickets
                ticketNumbers={ticketArray}
                lottoNumbers={lottoNumbers}
                isNumberGeneratingFinished={isNumberGeneratingFinished}
              />
            ) : null}{" "}
          </div>
          <div className="section_two">
            <AllLottoNumbers lottoNumbers={lottoNumbers} />
          </div>
        </div>
      </>
    );
  }
};

export default App;
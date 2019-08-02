import React from 'react';

const SingleTicket = ({ arrayOfLottoNumbers, lottoNumbers, isNumberGeneratingFinished }) => {
    let checkNumberList = [];
    let messageCondition = false;

    const checkStatus = () => {
        if (checkNumberList.length === arrayOfLottoNumbers.length) {
            return true
        } else {
            return false
        }
    };

    const checkNumbers = () => {
        if (lottoNumbers.length === 12 && isNumberGeneratingFinished) {
            checkNumberList = lottoNumbers.filter((n) => arrayOfLottoNumbers.includes(n),
                messageCondition = true
            )
        }
        return checkStatus()
    };

    const renderLottoNumbers = () => arrayOfLottoNumbers.map((n) => <div className='my_ticket_numbers'
        key={n} > {n} </div>);

    return (<div className={checkNumbers() ? 'my_ticket_list_green' : 'my_ticket_list'} >
        {renderLottoNumbers()}
        <span className={messageCondition ? (checkNumbers() ? 'span_message_winner' : 'span_message_loser') : 'span_message'} > {checkNumbers() ? 'Winner !!!' : 'Looser'} </span>
    </div>
    )
};
export default SingleTicket
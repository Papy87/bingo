import React from 'react'

const SpinBallsButton=(props)=>{
    
    return(
        <div className="spin_balls_div">
            <button onClick={props.spin} className='spin_balls_button'>Zavrti kugilce</button>
        </div>
    )
};

export default SpinBallsButton


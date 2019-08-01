import React from 'react';

const ResetButton=({reset})=>{
    return(
        <div className='reset_button_div'>
            <button onClick={reset} className='reset_button'>Reset
            </button>
        </div>
    )
};

export default ResetButton


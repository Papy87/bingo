import React from 'react';

import './ResetButton.css'

const ResetButton=({reset})=>{
    
    return(
        <div className='reset_button_div'>
            <button onClick={reset} className='reset_button'>Igrajte ponovo
            </button>
        </div>
    )
};

export default ResetButton


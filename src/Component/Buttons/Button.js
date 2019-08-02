import React from 'react'

const Button = ({arrayNumber,singleNumber,deleteNumber,buttonStatus,showButton}) => {
    
    const checkNumber=()=>{
        if(arrayNumber===singleNumber){
            return buttonStatus
        }
    };
    
    return (
        <>             
         <button onClick={showButton} value={singleNumber} className={checkNumber()?'show_delte_my_number_button':'delete_my_number_button ' }  onClick={deleteNumber} >X</button>
        </>
    )
};
export default Button
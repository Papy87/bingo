import React from 'react'
import SingleLottoNumber from './SingleLottoNumber'

const AllLottoNumbers=({lottoNumbers})=>{
    return (
        <div className='all_lotto_numbers'>
            <h4> Loto brojevi</h4>
            {lottoNumbers.map((nmb,i)=> <SingleLottoNumber key={i} number={nmb}/>)}
        </div>
    )
};

export default AllLottoNumbers
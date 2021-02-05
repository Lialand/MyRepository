import React from 'react'
import Heights from './Heights'

export default function Push_H() { 
    let h_amount = (document.getElementById("imagecreator").clientHeight / 484);
    const h_arr = [];
    for (let t = 0; t < (h_amount+2); t++) {
        h_arr.push(<Heights key={t} />);
    }
    return <div className='height'>{h_arr}</div>
}
import React from 'react'
import Push_H from './PushH'

export default function Push() {
    let w_amount = (document.getElementById("imagecreator").clientWidth / 257);
    const w_arr = [];
    for (let i = 0; i < w_amount; i++) {
        w_arr.push(<Push_H key={i} />);
    }
    return <div>{w_arr}</div>;
}
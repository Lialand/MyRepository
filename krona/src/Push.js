import React from 'react'
import { PushHInst, PushHBeh, PushHYout }  from './PushH'

function PushInst() {
    let w_amount = (document.getElementById("imagecreator").clientWidth / 257);
    const w_arr = [];
    for (let i = 0; i < w_amount; i++) {
        w_arr.push(<PushHInst key={i} />);
    }
    return <div>{w_arr}</div>;
}

// function PushBeh() {
//     let w_amount = (document.getElementById("imagecreator").clientWidth / 257);
//     const w_arr = [];
//     for (let i = 0; i < w_amount; i++) {
//         w_arr.push(<Push_H key={i} />);
//     }
//     return <div>{w_arr}</div>;
// }

function PushYout() {
    let w_amount = (document.getElementById("imagecreator").clientWidth / 257);
    const w_arr = [];
    for (let i = 0; i < w_amount; i++) {
        w_arr.push(<Push_H key={i} />);
    }
    return <div>{w_arr}</div>;
}

export { PushInst, /*PushBeh,*/ PushYout }
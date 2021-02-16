import React from 'react'
import { PushHInst, PushWYout }  from './PushH'

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
    let h_amount = (window.innerHeight / 2 / 968);
    const w_arr = [];
    for (let i = 0; i < h_amount+1; i++) {
        w_arr.push(<PushWYout key={i} />);
    }
    return <>{w_arr}</>;
}

export { PushInst, /*PushBeh,*/ PushYout }
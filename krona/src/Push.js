import React from 'react'
import { PushHInst, PushHBeh, PushWYout }  from './PushH'

function PushInst() {
    let h_amount = (window.innerHeight / 968);
    const h_arr = [];
    for (let i = 0; i < h_amount; i++) {
        h_arr.push(<PushHInst key={i} />);
    }
    return <>{h_arr}</>;
}

function PushBeh() { 
    let w_amount = (window.innerWidth / 2 / 968);
    const w_arr = [];
    for (let t = 0; t < w_amount+1; t++) {
        w_arr.push(<PushHBeh key={t} />);
    }
    return <>{w_arr}</>
}

function PushYout() {
    let h_amount = (window.innerHeight / 2 / 968);
    const h_arr = [];
    for (let i = 0; i < h_amount+1; i++) {
        h_arr.push(<PushWYout key={i} />);
    }
    return <>{h_arr}</>;
}

export { PushInst, PushBeh, PushYout }
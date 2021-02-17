import React from 'react'

function PushHInst() { 
    let w_amount = (window.innerWidth / 2 / 968);
    const arr1 = [];
    const arr2 = [];
    const arr3 = [];
    const arr4 = [];
    for (let t = 0; t < w_amount+1; t++) {
        arr1.push(<img src="photos/inst1.png" key={'e'+t} />);
        arr2.push(<img src="photos/inst2.png" key={'g'+t} />);
        arr3.push(<img src="photos/inst3.png" key={'h'+t} />);
        arr4.push(<img src="photos/inst4.png" key={'j'+t} />);
    }
    return( 
        <>
            <div className="height">{arr1}</div>
            <div className="height">{arr2}</div>
            <div className="height">{arr3}</div>
            <div className="height">{arr4}</div>
        </>
    )
}

function PushHBeh() { 
    let w_amount = (window.innerWidth / 4 / 968);
    const arr1 = [];
    const arr2 = [];
    const arr3 = [];
    const arr4 = [];
    for (let t = 0; t < w_amount+1; t++) {
        arr1.push(<img src="photos/beh1.jpg" key={'e'+t} />);
        arr2.push(<img src="photos/beh2.jpg" key={'g'+t} />);
        arr3.push(<img src="photos/beh3.jpg" key={'h'+t} />);
        arr4.push(<img src="photos/beh4.jpg" key={'j'+t} />);
    }
    return( 
        <>
            <div className="height">{arr1}</div>
            <div className="height">{arr2}</div>
            <div className="height">{arr3}</div>
            <div className="height">{arr4}</div>
        </>
    )
}

function PushWYout() { 
    let w_amount = (window.innerWidth / 2 / 968);
    const arr1 = [];
    const arr2 = [];
    const arr3 = [];
    const arr4 = [];
    for (let t = 0; t < w_amount+1; t++) {
        arr1.push(<img src="photos/you1.jpg" key={'a'+t} />);
        arr2.push(<img src="photos/you2.jpg" key={'b'+t} />);
        arr3.push(<img src="photos/you3.jpg" key={'c'+t} />);
        arr4.push(<img src="photos/you4.jpg" key={'d'+t} />);
    }
    return( 
        <>
            <div className="width">{arr1}</div>
            <div className="width">{arr2}</div>
            <div className="width">{arr3}</div>
            <div className="width">{arr4}</div>
        </>
    )
}

export { PushHInst, PushHBeh, PushWYout } 
import React from 'react'
import { HeightsInst, HeightsBeh, HeightsYout } from './Heights'

function PushHInst() { 
    let h_amount = (document.getElementById("imagecreator").clientHeight / 484);
    const h_arr = [];
    for (let t = 0; t < (h_amount + 2); t++) {
        h_arr.push(<HeightsInst key={t} />);
    }
    return <div className='height'>{h_arr}</div>
}

function PushHBeh() { 
    let h_amount = (window.innerWidth / 2 / 968);
    const h_arr = [];
    for (let t = 0; t < (h_amount + 1); t++) {
        h_arr.push(<HeightsBeh key={t} />);
    }
    return <>{h_arr}</>
}

function PushHYout() { 
    let h_amount = (window.innerHeight / 2 / 968);
    let arr1, arr2, arr3, arr4;
    arr1 = arr2 = arr3 = arr4 = [];
    for (let t = 0; t < (h_amount); t++) {
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

export { PushHInst, PushHBeh, PushHYout } 
import React from 'react'

export default function LogWith(props) {
    return (
        <div className={props.disp}>
            <div className='flexrow'>
                <p>Или войдите с помощью</p>
                <div className='logwithhelp'>
                    <img src='vectors/google.svg' className='logwithhelp_icon'>
                    </img>
                </div>
                <div className='logwithhelp'>
                    <img src='vectors/inst.svg' className='logwithhelp_icon'>
                    </img>
                </div>
                <div className='logwithhelp'>
                    <img src='vectors/vk.svg' className='logwithhelp_icon'>
                    </img>
                </div>
            </div>
        </div>
    )
}
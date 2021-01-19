import React from 'react'

export default function LogWith(props) {
    return (
        <div class={props.disp}>
            <div class='flexrow'>
                <p>Или войдите с помощью</p>
                <div class='logwithhelp'>
                    <img src='vectors/google.svg' class='logwithhelp_icon'>
                    </img>
                </div>
                <div class='logwithhelp'>
                    <img src='vectors/inst.svg' class='logwithhelp_icon'>
                    </img>
                </div>
                <div class='logwithhelp'>
                    <img src='vectors/vk.svg' class='logwithhelp_icon'>
                    </img>
                </div>
            </div>
        </div>
    )
}
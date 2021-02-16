import React from 'react'
import ReactDOM from 'react-dom'
import { PushInst } from './Push'
import { PushHBeh, PushHYout } from './PushH'

function reactorInst() {
    ReactDOM.render(
        <PushInst />,
        document.getElementById("imagecreator")
    )
}

function reactorBeh() {
    ReactDOM.render(
        <PushHBeh />,
        document.getElementById("imgbehance")
    )
}

function reactorYout() {
    ReactDOM.render(
        <PushHYout />,
        document.getElementById("imgyoutube")
    )
}

export { reactorInst, reactorBeh, reactorYout }
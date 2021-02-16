import React from 'react'
import ReactDOM from 'react-dom'
import { PushInst, PushYout } from './Push'
import { PushHBeh } from './PushH'

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
        <PushYout />,
        document.getElementById("imgyoutube")
    )
}

export { reactorInst, reactorBeh, reactorYout }
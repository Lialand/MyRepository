import React from 'react'
import ReactDOM from 'react-dom'
import { PushInst, PushYout, PushBeh } from './Push'
import { PushHBeh } from './PushH'

function reactorInst() {
    ReactDOM.render(
        <PushInst />,
        document.getElementById("imginstagram")
    )
}

function reactorBeh() {
    ReactDOM.render(
        <PushBeh />,
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
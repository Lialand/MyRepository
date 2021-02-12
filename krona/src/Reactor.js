import React from 'react'
import ReactDOM from 'react-dom'
import Push from './Push'

export default function reactor() {
    ReactDOM.render(
        <Push />,
        document.getElementById("imagecreator"),
    )
}